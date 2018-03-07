import React from 'react';
import Paper from 'material-ui/Paper';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { blue } from 'material-ui/colors';
import {
    SortingState, SelectionState, FilteringState, PagingState, GroupingState,
    IntegratedFiltering, IntegratedGrouping, IntegratedPaging, IntegratedSorting, IntegratedSelection,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table, TableHeaderRow, TableFilterRow, TableSelection, TableGroupRow,
    PagingPanel, GroupingPanel, DragDropProvider, TableColumnReordering, Toolbar,
    TableColumnVisibility, ColumnChooser,
} from '@devexpress/dx-react-grid-material-ui';

import {
    ProgressBarCell,
} from './progress-bar-cell';
import {
    HighlightedCell,
} from './highlighted-cell';
import {
    Button
} from 'components';


import {
    generateRows,
    globalSalesValues,
} from './generator';

class LiveTable extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            columns: [
                { name: 'product', title: 'Товар' },
                { name: 'region', title: 'Регион' },
                { name: 'amount', title: 'Сумма' },
                { name: 'discount', title: 'Скидка' },
                { name: 'saleDate', title: 'Дата' },
                { name: 'customer', title: 'Контрагент' },
                { name: 'dealCard', title: 'Сделка' }
            ],
            tableColumnExtensions: [
                { columnName: 'amount', align: 'right' },
            ],
            rows: generateRows({ columnValues: globalSalesValues, length: 1000 }),
            pageSizes: [5, 10, 15],
        };
    }
    render() {
        const {
            rows, columns, tableColumnExtensions, pageSizes,
        } = this.state;

        return (
            <Paper>
                <Grid
                    rows={rows}
                    columns={columns}
                >
                    <FilteringState
                        defaultFilters={[{ columnName: 'saleDate', value: '2016-02' }]}
                    />
                    <SortingState
                        defaultSorting={[
                            { columnName: 'product', direction: 'asc' },
                            { columnName: 'saleDate', direction: 'asc' },
                        ]}
                    />

                    <SelectionState />

                    <GroupingState
                        defaultGrouping={[{ columnName: 'product' }]}
                        defaultExpandedGroups={['EnviroCare Max']}
                    />
                    <PagingState
                        defaultCurrentPage={0}
                        defaultPageSize={10}
                    />

                    <IntegratedGrouping />
                    <IntegratedFiltering />
                    <IntegratedSorting />
                    <IntegratedPaging />
                    <IntegratedSelection />

                    <DragDropProvider />

                    <Table
                        columnExtensions={tableColumnExtensions}
                        cellComponent={Cell}
                    />
                    <TableSelection showSelectAll />

                    <TableColumnReordering defaultOrder={columns.map(column => column.name)} />

                    <TableHeaderRow showSortingControls />

                    <PagingPanel
                        pageSizes={pageSizes}
                    />

                    <TableGroupRow />
                    <TableColumnVisibility
                        defaultHiddenColumnNames={['customer']}
                    />
                    <Toolbar />
                    <GroupingPanel showSortingControls />
                    <ColumnChooser />
                    <TableFilterRow />
                </Grid>
            </Paper>
        );
    }
}


const Cell = (props) => {

    if (props.column.name === 'discount') {
        return <ProgressBarCell {...props} />;
    }
    if (props.column.name === 'amount') {
        return <HighlightedCell {...props} />;
    }
    return (

        <Table.Cell {...props} >

        </Table.Cell>

    );
};


export default LiveTable ;




