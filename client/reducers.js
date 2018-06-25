import { combineReducers } from 'redux';
import Chess from 'chess.js'

const reducers = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE':
            var newState = {data: action.data, highlightedCells: highlightedCells(action.data)};            
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
                // this.setCellMeta(row, col, 'className', '');
            }
            else {
                resultRow.push(0);
                // this.setCellMeta(row, col, 'className', 'yellow');
            }
    
        }
        result.push(resultRow);
    }
    return result;
}

export default reducers;