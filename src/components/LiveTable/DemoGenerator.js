import React from 'react';
import Paper from 'material-ui/Paper';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { blue } from 'material-ui/colors';
import LiveTable from './LiveTable'

class DemoRender extends React.Component{
    render(){

        return (
            <DemoContainer theme={darkTheme}>
                <LiveTable/>
            </DemoContainer>
        );
    }
}

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: blue,
    },
});

const DemoContainer = ({ theme, children }) => (
    <MuiThemeProvider theme={theme}>
        {children}
    </MuiThemeProvider>
);


export default DemoRender ;
