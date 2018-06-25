import Chess from 'chess.js'

const reducers = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE':
            var analValues = analyze(action.data);
            var newState = {data: action.data, fen: analValues.fen, error: analValues.error };      
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
    for (var row = 0; row < data.length; row++) {        
        for (var col = 0; col < data[row].length; col++) {
            var move = data[row][col];
            if (move != null && chess.move(move) != null) {
                //valid move                                
            } else if ((move == null || move.trim().length == 0) && row == data.length-1) {
                //last move empty -> valid move
            } 
            else {
                return {fen: chess.fen(), error: 'Invalid move #'+(row+1)} 
            }
    
        }        
    }
    return {fen: chess.fen(), error: ''};
}

export default reducers;