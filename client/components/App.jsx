import React from 'react';
import Handsontable from 'handsontable';
import { HotTable } from '@handsontable/react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.data = Handsontable.helper.createSpreadsheetData(100, 2);
    
    this.colHeaders = ['White', 'Black'];
    this.contextMenu = ['row_above', 'row_below'];
  }

  render() {
    return (
       <div id="hot-app">
        <HotTable data={this.handsontableData} colHeaders={true} rowHeaders={true} width="200"  stretchH="all" colHeaders={this.colHeaders} contextMenu={this.contextMenu}  
        allowInsertColumn={false} maxCols={2} minCols={2} minRows={1} minSpareRows={1} startRows={1}/>
      </div>
    );
  }
} 