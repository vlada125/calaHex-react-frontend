import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NavigationDrawer from "./NavigationDrawer";
import LogoImage from "../assets/logo.png";
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import classNames from 'classnames';

import {
    AppBar,
    Toolbar,
    Button,
    Hidden,
    IconButton,
    withStyles,
    List,
    ListItem
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { fontWeight } from "@material-ui/system";

const styles = theme => ({
    root: {
        boxShadow: '0 0 0 0 #fff'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    flexGrow: {
        flexGrow: 1,
    },
    navigationContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    toolbar: {
        width: '98%', 
        margin: '0 auto',
        padding: theme.spacing(0, 2),
        minHeight: 48
    },
    listItem: {
        cursor: 'pointer',
        paddingTop: '5px',
        paddingRight: '12px',
        paddingLeft: '12px',
        paddingBottom: 0,
    },
    listItemText: {
        textDecoration: "none !important",
        flex: '0 0 auto',
        whiteSpace: 'nowrap',
        fontFamily: 'Montserrat, sans-serif'
    },
    brandText: {
        fontFamily: "'Baloo Bhaijaan', cursive",
        fontWeight: 400
    },
    logo: {
        width: "100%",
        marginTop: "10px",
    },
    signUp: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff !important',
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        borderWidth: theme.border.borderWidth,
        borderColor: theme.border.borderColor,
        borderRadius: theme.spacing(1.5)
    },
    login: {
        backgroundColor: theme.palette.background.default,
    },
    notifications: {
        fontSize: 14,
    },
    download: {
        fontSize: 14,
        border: 'solid 1px',
        borderRadius: '50%'
    },
    fixedItems: {
        color: theme.palette.common.black
    }
});



function NavBar(props) {
    const {
        classes,
        handleMobileDrawerOpen,
        handleMobileDrawerClose,
        mobileDrawerOpened,
        selectedTab
    } = props;

    const menuItems = [
        {
            name: 'Crypto Exchange',
            link: '/crypto-exchange',
        },
        {
            name: 'Token Exchange',
            link: '/token-exchange',
        },
        {
            name: 'Margin Trading',
            link: '/margin-trading',
        },
        {
            name: 'Future Trading',
            link: '/future-trading',
        },
        {
            name: 'Buy Crypto',
            link: '/buy-crypto',
        },
        {
            name: 'Token Info Base',
            link: '/token-info-base',
        },
        {
            name: 'CAX Rewards',
            link: '/cax-rewards',
        },
        {
            name: 'About US',
            link: '/about-us',
        },
    ];

    const menuItemsFixed = [
        {
            key: 'sign-up',
            name: 'Sign Up',
            link: '/sign-up',
            class: classes.signUp
        },
        {
            key: 'log-in',
            name: 'Log In',
            link: '/login',
            class: classes.login
        },
        {
            key: 'notifications',
            name: <NotificationsIcon className={classes.notifications} />,
            link: '/notifications',
        },
        {
            key: 'download',
            name: <ArrowDownwardIcon className={classes.download} />,
            link: '/download',
        },
    ];

    return (
        <div>
            <AppBar position = 'sticky' elevation={0} color={'transparent'} className={classes.appbar}>
                <Toolbar disableGutters className={classes.toolbar}>
                    <Link
                        to = {""}
                        className={classes.brandText}
                        display="inline"
                    >
                        <img
                            src={LogoImage}
                            className={classes.logo}
                            alt="Main Logo"
                        />
                    </Link>
                    <Hidden mdDown>
                        <List className={classes.navigationContainer}>
                            {menuItems.map(element => {
                                return (
                                    <ListItem key={element.name} className={classes.listItem}>
                                        <Link
                                            to={element.link}
                                            className={classes.listItemText}
                                            onClick={handleMobileDrawerClose}
                                        >
                                            {element.name}
                                        </Link>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Hidden>
                    <div className={classes.flexGrow} />
                    <Hidden xsDown>
                        <List className={classes.navigationContainer}>
                            {menuItemsFixed.map(element => {
                                return (
                                    <ListItem key={element.key} className={classes.listItem}>
                                        <Link
                                            to={element.link}
                                            className={classNames(element.class, classes.listItemText, classes.fixedItems)}
                                            onClick={handleMobileDrawerClose}
                                        >
                                            {element.name}
                                        </Link>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                        className={classes.iconButton}
                        onClick={handleMobileDrawerOpen}
                        aria-label="Menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <NavigationDrawer
                menuItems={menuItems}
                anchor="right"
                open={mobileDrawerOpened}
                selectedItem={selectedTab}
                onClose={handleMobileDrawerClose}
            />
        </div>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    handleMobileDrawerOpen: PropTypes.func,
    handleMobileDrawerClose: PropTypes.func,
    mobileDrawerOpened: PropTypes.bool,
    selectedTab: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
