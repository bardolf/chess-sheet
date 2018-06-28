import React from 'react';
import { HotTable } from '@handsontable/react';
import { connect } from 'react-redux'
import { onAfterGridChange } from '../actions';
import Handsontable from 'handsontable';

class Grid extends React.Component {
    constructor() {
        super();
        this.afterChange = this.afterChange.bind(this);
        this.cells = this.cells.bind(this);
        this.invalidMoveValueRenderer = this.invalidMoveValueRenderer.bind(this);
        Handsontable.renderers.registerRenderer('invalidMoveValueRenderer', this.invalidMoveValueRenderer);
    }

    afterChange(changes, source) {
        if (source === 'loadData') {
            return; //don't do anything as this is called when table is loaded
        }
        this.props.onAfterGridChange(this.props.data);
    }

    invalidMoveValueRenderer(instance, td, row, col, prop, value, cellProperties) {
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        if (this.props.invalidMove) {
            if (this.props.invalidMove[0] == row && this.props.invalidMove[1] == col) {
                td.style.background = '#ff3f48';
            }
        }
    }

    cells(row, col, prop) {
        var cellProperties = {};
        cellProperties.renderer = 'invalidMoveValueRenderer';
        return cellProperties;
    }

    render() {
        return (
            <div id="grid">
                <HotTable id="hot" afterChange={this.afterChange} data={this.props.data} cells={this.cells}
                    settings={{
                        colHeaders: true,
                        rowHeaders: true,
                        allowInsertColumn: false,
                        colHeaders: ['Bílý', 'Černý'],
                        contextMenu: ['row_above', 'row_below', 'remove_row'],
                        width: 200,
                        height: 500,
                        maxCols: 2,
                        minCols: 2,
                        minRows: 1,
                        minSpareRows: 1,
                        startRows: 1,
                        stretchH: 'all',
                    }} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    data: state.data,
    invalidMove: state.invalidMove,
});

const mapDispatchToProps = {
    onAfterGridChange,
};

const GridContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid);

export default GridContainer;  
