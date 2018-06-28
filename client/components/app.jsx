import React from 'react';
import GridContainer from './grid.jsx';
import ChessboardContainer from './chessboard.jsx';
import PgnContainer from './pgn.jsx';

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <table cellPadding="10">
                    <tbody>
                        <tr>
                            <td valign="top">
                                <a href="https://gitlab.com/bardolf/chess-sheet/blob/master/README.md">Nápověda/Help</a>
                                <GridContainer />
                            </td>
                            <td valign="top"><ChessboardContainer /></td>
                            <td valign="top"><PgnContainer /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

