import React from 'react';
import GridContainer from './grid.jsx';
import ChessboardContainer from './chessboard.jsx';
import PgnContainer from './pgn.jsx';
import InvalidMoveContainer from './invalidMove.jsx';

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
                            <td valign="top"><GridContainer/></td>
                            <td valign="top"><ChessboardContainer/></td>                            
                            <td valign="top"><PgnContainer/></td>                                                        
                        </tr>                                                
                    </tbody>
                </table>
            </div>
        );
    }
}

