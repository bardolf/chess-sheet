import React from 'react';
import { connect } from 'react-redux'

class Pgn extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>PGN</div>
        <textarea value={this.props.pgn} cols={40} rows={20}></textarea>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  pgn: state.pgn,    
});

const mapDispatchToProps = {
};

const PgnContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pgn);

export default PgnContainer;  
