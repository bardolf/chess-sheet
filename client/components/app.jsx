import React from 'react';
import GridContainer from './grid.jsx';
import ChessboardContainer from './chessboard.jsx';

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class="table-responsive-sm">
                <table>                    
                    <tbody>
                        <tr>                            
                            <td valign="top"><GridContainer/></td>
                            <td><ChessboardContainer/></td>                            
                        </tr>                                                
                    </tbody>
                </table>
            </div>
        );
    }
}

