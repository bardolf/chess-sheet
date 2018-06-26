import Chess from 'chess.js'

const reducers = (state = { data: [[]], fen: '', pgn: '', error: '' }, action) => {
    switch (action.type) {
        case 'GRID_CHANGE':
            if (action.data) {
                var analValues = analyze(action.data);
                var newState = { data: action.data, fen: analValues.fen, pgn: analValues.pgn, error: analValues.errorMsg };
                return newState;
            } 
            return state;
        default:
            return state;
    }
}

const highlightedCells = data => {
    var chess = new Chess();
    var result = [];
    for (var row = 0; row < data.length; row++) {
        var resultRow = [];
        for (var col = 0; col < data[row].length; col++) {
            var move = data[row][col];
            if (move != null && chess.move(move) != null) {
                resultRow.push(1);
            }
            else {
                resultRow.push(0);
            }
        }
        result.push(resultRow);
    }
    return result;
}

const analyze = data => {
    var chess = new Chess();
    var invalidMove = null;
    var invalidMoveConfirmed = false;
    for (var row = 0; row < data.length; row++) {
        for (var col = 0; col < data[row].length; col++) {
            var move = data[row][col];
            move = czech2English(move);
            if (invalidMove !== null) {
                if (!invalidMoveConfirmed && (move !== null && move.trim().length != 0)) {
                    invalidMoveConfirmed = true;
                }
                continue;
            }

            if (move === null || move.trim().length == 0) {
                invalidMove = errorMessage(row, col);
                continue;
            }

            if (chess.move(move) == null) {
                invalidMove = errorMessage(row, col);
                invalidMoveConfirmed = true;
            }
        }
    }
    return { fen: chess.fen(), pgn: chess.pgn(), errorMsg: invalidMoveConfirmed ? invalidMove : '' };
}

const errorMessage = (row, col) => {
    return 'Neplatný ' + (row + 1) + '. tah ' + (col == 0 ? 'bílého' : 'černého');
}

const czech2English = move => {
    if (move === null || move.trim().length == 0) {
        return move;
    }
    //transform czech notation to english one - pieces moves
    if (/^[jJsSvVdD].\d$/.test(move) || /^[jJsSvVdD]..\d$/.test(move)) {
        move = move.replace(/^[jJ]/, "N");
        move = move.replace(/^[sS]/, "B");
        move = move.replace(/^[vV]/, "R");
        move = move.replace(/^[dD]/, "Q");
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