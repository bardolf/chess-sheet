import React from 'react';
import { connect } from 'react-redux';
import CopyToClipboard from 'react-copy-to-clipboard';

class Pgn extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>PGN</div>
        <textarea readOnly value={this.props.pgn} cols={40} rows={20}></textarea>
        <div>
          <CopyToClipboard text={this.props.pgn} onCopy={this.onCopy}>
            <button>Kopírovat</button>
          </CopyToClipboard>
        </div>
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
