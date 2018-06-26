import Chess from 'chess.js'

const reducers = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE':
            var analValues = analyze(action.data);
            var newState = {data: action.data, fen: analValues.fen, pgn: analValues.pgn, error: analValues.errorMsg };                  
            return newState;
        default:
            return state;
    }
}

const highlightedCells = data => {
    var chess = new Chess();
    var result  = [];
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
    return {fen: chess.fen(), pgn: chess.pgn(), errorMsg: invalidMoveConfirmed ? invalidMove : ''};
}

const errorMessage = (row,col) => {
    return 'Neplatný tah #'+(row+1) + (col == 0 ? 'bílý' : 'černý'); 
}

export default reducers;