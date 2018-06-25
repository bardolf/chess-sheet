import React from 'react';
import { connect } from 'react-redux'
import Chessground from 'react-chessground'


class Chessboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Chessground fen={this.props.fen}/>
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
