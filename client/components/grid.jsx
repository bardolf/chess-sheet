import React from 'react';
import { HotTable } from '@handsontable/react';
import { connect } from 'react-redux'
import { onAfterGridChange } from '../actions';

class Grid extends React.Component {
  constructor() {
    super();
    // this.data = [['e4', 'e5'], ['jf3', 'jc6'], ['sc4', 'sc5'], ['d3', 'h6'], ['o-o', 'jf6'], ['c3', 'sb6'], ['a4', 'a6'], ['sd2', 'o-o']];
    this.afterChange = this.afterChange.bind(this);
  }

  afterChange() {
    this.props.onAfterGridChange(this.props.data);
  }

  render() {
    return (
      <div id="grid">
        <HotTable id="hot" afterChange={this.afterChange} data={this.props.data} settings={{          
          colHeaders: true,
          rowHeaders: true,
          allowInsertColumn: false,
          colHeaders: ['Bílý', 'Černý'],
          contextMenu: ['row_above', 'row_below', 'remove_row'],
          width: 200,
          maxCols: 2,
          minCols: 2,
          minRows: 1,
          minSpareRows: 1,
          startRows: 1,
        }} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  data: state.data,
  highlightedCells: state.highlightedCells,
});

const mapDispatchToProps = {
  onAfterGridChange,
};

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);

export default GridContainer;  
