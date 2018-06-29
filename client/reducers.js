import Chess from 'chess.js'
import { example } from './examples';

const INITIAL_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

const reducers = (state = { data: [[]], fen: INITIAL_FEN, pgn: '', error: '', invalidMove: null }, action) => {
    switch (action.type) {
        case 'GRID_CHANGE':
            if (action.data) {
                return getNewState(action.data);
            }
            return state;
        case 'RESET':
            return getNewState([[]]);
        case 'EXAMPLE':
            return getNewState(example());
        default:
            return state;
    }
}

const getNewState = data => {
    var analValues = analyze(data);
    return { data: data, fen: analValues.fen, pgn: analValues.pgn, error: analValues.errorMsg, invalidMove: analValues.invalidMove };
}

const analyze = data => {
    var chess = new Chess();
    var errorMessage = null;
    var errorConfirmed = false;
    var invalidMove = null;
    for (var row = 0; row < data.length; row++) {
        for (var col = 0; col < data[row].length; col++) {
            var move = data[row][col];
            move = czech2English(move, chess);
            if (errorMessage !== null) {
                if (!errorConfirmed && (move !== null && move.trim().length != 0)) {
                    errorConfirmed = true;
                }
                continue;
            }

            if (move === null || move.trim().length == 0) {
                errorMessage = errorMessageText(row, col);
                invalidMove = [row, col];
                continue;
            }

            if (chess.move(move) == null) {
                errorMessage = errorMessageText(row, col);
                invalidMove = [row, col];
                errorConfirmed = true;
            }
        }
    }
    return { fen: chess.fen(), pgn: chess.pgn(), errorMsg: errorConfirmed ? errorMessage : '', invalidMove: errorConfirmed ? invalidMove : null };
}

const errorMessageText = (row, col) => {
    return 'Neplatný ' + (row + 1) + '. tah ' + (col == 0 ? 'bílého' : 'černého');
}

const czech2English = (move, chess) => {
    if (move === null || move.trim().length == 0) {
        return move;
    }
    // debugger;
    //let's avoid the ambiguity with queen/dama and d pawn 
    if (/^[d]\d$/.test(move) || /^[d]x.\d$/.test(move)) { 
        //it starts with the 'd', let's check, whether it could be a pawn
        if (chess.move(move)) {
            //it is valid, let's keep it
            chess.undo();
        } else {
            move = move.replace(/^[d]/, "D");
        }
    }

    //transform czech notation to english one - pieces moves
    if (/^[jJsSvVDdk].\d$/.test(move) || /^[jJsSvV]..\d$/.test(move) || /^[jJsSvV].x.\d$/.test(move) || /^[Dk]x.\d$/.test(move)) {
        move = move.replace(/^[jJ]/, "N");
        move = move.replace(/^[sS]/, "B");
        move = move.replace(/^[vV]/, "R");
        move = move.replace(/^[Dd]/, "Q");
        move = move.replace(/^[k]/, "K");
    }
    move = move.replace(/^[oO]-[oO]$/, "O-O");
    move = move.replace(/^[oO]-[oO]-[oO]$/, "O-O-O");    

    if (/^.8[jJsSvVdD]$/.test(move)) {
        move = move.replace(/[jJ]$/, "N");
        move = move.replace(/[sS]$/, "B");
        move = move.replace(/[vV]$/, "R");
        move = move.replace(/[dD]$/, "Q");
    }
    return move;
}

export default reducers;