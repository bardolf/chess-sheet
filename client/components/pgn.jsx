import React from 'react';
import { connect } from 'react-redux';
import CopyToClipboard from 'react-copy-to-clipboard';
import { onReset } from '../actions';
import { onExample } from '../actions';

class Pgn extends React.Component {
  constructor() {
    super();    
  }

  render() {
    return (
      <div>
        <div>PGN</div>
        <textarea readOnly value={this.props.pgn} cols={40} rows={20}></textarea>
        <CopyToClipboard text={this.props.pgn} onCopy={this.onCopy}>
          <button className="btn btn-sm btn-block">Kopírovat</button>
        </CopyToClipboard>
        <button className="btn btn-sm btn-block" onClick={this.props.onReset}>Reset</button>        
        <button className="btn btn-sm btn-block" onClick={this.props.onExample}>Ukázka</button>        
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  pgn: state.pgn,
});

const mapDispatchToProps = {
  onReset,
  onExample,
};

const PgnContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pgn);

export default PgnContainer;  
