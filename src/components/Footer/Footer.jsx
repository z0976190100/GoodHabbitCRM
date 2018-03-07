import React from 'react';
import PropTypes from 'prop-types';
import {
    List, ListItem, withStyles
} from 'material-ui';

import { footerStyle } from 'variables/styles';


class Footer extends React.Component{

    render(){
        const { classes, logo } = this.props;
        var brand = (
            <div className={classes.logo}>
                <a href="#" className={classes.logoLink}>xxx</a>
            </div>
        );
        return (
            <footer className={classes.footer}>
                <div className={classes.container}>
                    <div className={classes.left}>
                        <List className={classes.list}>
                            <ListItem className={classes.inlineBlock}>
                                <a href="#home" className={classes.block}>Главная</a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a href="#company" className={classes.block}>Оффсайт</a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a href="#portfolio" className={classes.block}>Профиль</a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a href="#blog" className={classes.block}>Соцсети</a>
                            </ListItem>
                        </List>
                    </div>
                        <span>
                            {brand}  &copy; {1900 + (new Date()).getYear()} <a href="#this" className={classes.a}>#good-habits-studio</a>, have another one with us.
                        </span>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
