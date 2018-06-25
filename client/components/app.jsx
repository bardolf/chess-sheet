import React from 'react';
import GridContainer from './grid.jsx';
import FenContainer from './fen.jsx';
import ChessboardContainer from './chessboard.jsx';

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <FenContainer/>
                <GridContainer/>
                <ChessboardContainer/>
            </div>
        );
    }
}

