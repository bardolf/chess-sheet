import React from 'react';
import { connect } from 'react-redux'

class InvalidMove extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="text-danger">{this.props.error}</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  error: state.error,    
});

const mapDispatchToProps = {
};

const InvalidMoveContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InvalidMove);

export default InvalidMoveContainer;  
