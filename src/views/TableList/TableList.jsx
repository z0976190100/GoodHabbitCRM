import React from 'react';
import {
    Grid
} from 'material-ui';

import {
    RegularCard, Table, ItemGrid
} from 'components';

////////////////////////////////

import DemoRender from '../../components/LiveTable/DemoGenerator';


//////////////////////////////////

class TableList extends React.Component{
    render(){
        return (
            <Grid container>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        headerColor="green"
                        plainCard
                        cardTitle="ПокупайПродавайБазаДанных"
                        cardSubtitle="Ну просто то, что доктор прописал! "
                        content={
                            <DemoRender />
                        }
                    />
                </ItemGrid>

            </Grid>
        );
    }
}

export default TableList;
