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
            <div class="table-responsive">
                <table cellpadding="10">                    
                    <tbody>
                        <tr>                            
                            <td valign="top">
                            <InvalidMoveContainer/><GridContainer/></td>
                            <td valign="top"><ChessboardContainer/></td>                            
                            <td valign="top"><PgnContainer/></td>                            
                            <td valign="top"></td>                            
                        </tr>                                                
                    </tbody>
                </table>
            </div>
        );
    }
}

