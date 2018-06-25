import React from 'react';
import { HotTable } from '@handsontable/react';
import { connect } from 'react-redux'
import { onAfterChange } from '../actions';
import Handsontable from 'handsontable';

class App extends React.Component {
  constructor() {
    super();
    this.data = Handsontable.helper.createEmptySpreadsheetData(1, 2);
    // this.updateCellProperties.bind(this);
  }

  updateCellProperties(row, col, prop) {
    var cellProperties = {};    
    // debugger;
    if (this.props.highlightedCells && this.props.highlightedCells[row] && this.props.highlightedCells[row][col] != 1) {
      cellProperties.className = "yellow";
    } else {
      cellProperties.className = "";
    }
    return cellProperties;
  }

  // afterChange() {
  //   var chess = new Chess();
  //   for (var row = 0; row < this.getData().length; row++) {
  //     for (var col = 0; col < this.getData()[row].length; col++) {
  //       var move = this.getData()[row][col];
  //       // if (move != null && chess.move(move) != null) {
  //       //   this.setCellMeta(row, col, 'className', '');
  //       // }
  //       // else {
  //       //   this.setCellMeta(row, col, 'className', 'yellow');
  //       // } 
  //     }
  //   }


  // this.render();
  // debugger;
  // console.log(chess.fen());

  // }

  render() {
    return (

      <div id="grid">
        <HotTable id="my-hot" settings={{
          data: this.data,
          colHeaders: true,
          rowHeaders: true,
          allowInsertColumn: false,
          colHeaders: ['White', 'Black'],
          contextMenu: ['row_above', 'row_below'],
          width: 200,
          maxCols: 2,
          minCols: 2,
          minRows: 1,
          minSpareRows: 1,
          startRows: 1,
          onAfterChange: (changes, source) => this.props.onAfterChange(this.data),
          cells: (row, cell, prop) => this.updateCellProperties(row, cell, prop),
        }} />
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    debugger;
    // this.updateHot(this.settingsMapper.getSettings(nextProps));
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


const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;  
