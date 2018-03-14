import React from 'react';
import {
    withStyles, Grid
} from 'material-ui';
import {
    ContentCopy, Store, InfoOutline, Warning, DateRange, LocalOffer, Update, ArrowUpward, AccessTime, Accessibility
} from 'material-ui-icons';
import PropTypes from 'prop-types';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';

import {
    StatsCard, ChartCard, TasksCard, RegularCard, Table, ItemGrid
} from 'components';

import {
    dailySalesChart ,
    emailsSubscriptionChart,
    completedTasksChart
} from 'variables/charts';

import { dashboardStyle } from 'variables/styles';

class Dashboard extends React.Component{
    state = {
        value: 0,
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    render(){
        return (
            <div>
                <Grid container>
                    <ItemGrid xs={12} sm={6} md={3}>
                        <StatsCard
                            icon={ContentCopy}
                            iconColor="orange"
                            title="ОРДЕР"
                            description="49/38"
                            small="выдано/сдано"
                            statIcon={Warning}
                            statIconColor="danger"
                            statLink={{text: "Заказ горит!", href:"#pablo"}}
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={6} md={3}>
                        <StatsCard
                            icon={Store}
                            iconColor="green"
                            title="Продажи"
                            description="$34,245"
                            statIcon={DateRange}
                            statText="за последние 24 часа"
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={6} md={3}>
                        <StatsCard
                            icon={InfoOutline}
                            iconColor="red"
                            title="Сделки"
                            description="75"
                            statIcon={LocalOffer}
                            statText="Суммарно по филиалу"
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={6} md={3}>
                        <StatsCard
                            icon={Accessibility}
                            iconColor="blue"
                            title="Клиенты"
                            description="+245"
                            statIcon={Update}
                            statText="с 01.01.2018"
                        />
                    </ItemGrid>
                </Grid>
                <Grid container>
                    <ItemGrid xs={12} sm={12} md={4}>
                        <ChartCard
                            chart={
                                <ChartistGraph
                                    className="ct-chart"
                                    data={dailySalesChart.data}
                                    type="Line"
                                    options={dailySalesChart.options}
                                    listener={
                                        dailySalesChart.animation
                                    }
                                />
                            }
                            chartColor="green"
                            title="Продажи за сутки"
                            text={
                                <span>
                                    <span className={this.props.classes.successText}><ArrowUpward className={this.props.classes.upArrowCardCategory}/> 55%</span> increase in today sales.
                                </span>
                            }
                            statIcon={AccessTime}
                            statText="обновлено 4 мин назад"
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                        <ChartCard
                            chart={
                                <ChartistGraph
                                    className="ct-chart"
                                    data={emailsSubscriptionChart.data}
                                    type="Bar"
                                    options={emailsSubscriptionChart.options}
                                    responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                                    listener={
                                        emailsSubscriptionChart.animation
                                    }
                                />
                            }
                            chartColor="orange"
                            title="Клиенты"
                            text="по результатам"
                            statIcon={AccessTime}
                            statText="с 01.01.2018"
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                        <ChartCard
                            chart={
                                <ChartistGraph
                                    className="ct-chart"
                                    data={completedTasksChart.data}
                                    type="Line"
                                    options={completedTasksChart.options}
                                    listener={
                                        completedTasksChart.animation
                                    }
                                />
                            }
                            chartColor="red"
                            title="Рассылка"
                            text="Last Campaign Performance"
                            statIcon={AccessTime}
                            statText="campaign sent 2 days ago"
                        />
                    </ItemGrid>
                </Grid>
                <Grid container>
                    {/*<ItemGrid xs={12} sm={12} md={12}>
                        <RegularCard
                            headerColor="orange"
                            cardTitle="Employees Stats"
                            cardSubtitle="New employees on 15th September, 2016"
                            content={
                                <Table
                                    tableHeaderColor="warning"
                                    tableHead={['ID','Name','Salary','Country']}
                                    tableData={[
                                        [ '1' , "Dakota Rice" , "$36,738" , "Niger"] ,
                                        [ '2' , "Minerva Hooper" , "$23,789" , "Curaçao" ] ,
                                        [ '3' , "Sage Rodriguez" , "$56,142" , "Netherlands" ] ,
                                        [ '4' , "Philip Chaney" , "$38,735" , "Korea, South" ] ,
                                    ]}
                                />
                            }
                        />
                    </ItemGrid>*/}
                    <ItemGrid xs={12} sm={12} md={12}>
                        <TasksCard />
                    </ItemGrid>
                </Grid>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyle)(Dashboard);
