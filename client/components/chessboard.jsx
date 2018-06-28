import React from 'react';
import { connect } from 'react-redux'
import Chessground from 'react-chessground'


class Chessboard extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Chessground fen={this.props.fen} draggable={{ enabled: false }} viewOnly={true} resizable={true} />
                <div>&nbsp;</div>
                <div>{this.props.fen}</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    fen: state.fen,
});

const mapDispatchToProps = {
};

const ChessboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Chessboard);

export default ChessboardContainer;  
