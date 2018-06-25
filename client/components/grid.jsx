import React from 'react';
import { HotTable } from '@handsontable/react';
import { connect } from 'react-redux'
import { onAfterChange } from '../actions';
import Handsontable from 'handsontable';

class Grid extends React.Component {
  constructor() {
    super();
    this.data = Handsontable.helper.createEmptySpreadsheetData(1, 2);    
  }

  render() {
    return (
      <div id="grid">
        <HotTable id="my-hot" settings={{
          data: this.data,
          colHeaders: true,
          rowHeaders: true,
          allowInsertColumn: false,
          colHeaders: ['Bílý', 'Černý'],
          contextMenu: ['row_above', 'row_below'],
          width: 200,
          maxCols: 2,
          minCols: 2,
          minRows: 1,
          minSpareRows: 1,
          startRows: 1,
          onAfterChange: (changes, source) => {
            this.props.onAfterChange(this.data)          
          },          
        }} />
      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
}

const mapStateToProps = (state, ownProps) => ({
  data: state.data,
  highlightedCells: state.highlightedCells,
});

const mapDispatchToProps = {
  onAfterChange,
};

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);

export default GridContainer;  
