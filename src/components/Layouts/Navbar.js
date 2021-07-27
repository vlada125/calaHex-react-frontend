import React, { Fragment, memo, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import clsx from 'clsx';
import {
    AppBar,
    Toolbar,
    Hidden,
    IconButton,
    withStyles,
    List,
    ListItem,
    Popover,
    Box,
    Typography,
    Divider,
    Badge,
    useMediaQuery
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import LogoImage from "../../assets/logo.png";
import sLogoImage from "../../assets/cax.png";
import NavigationDrawer from "../Layouts/NavigationDrawer";
import LanguageSelector from "../LanguageSelector";
import { Text, LanguageContext } from '../../utils/Language';

import { SignOut } from "../../redux/actions/auth";
import { GetNotification } from "../../redux/actions/other";

const styles = theme => ({
    root: {
        boxShadow: '0 0 0 0 #fff'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        marginBottom: 40
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
        padding: theme.spacing(0, 1),
        minHeight: 48
    },
    listItem: {
        cursor: 'pointer',
        paddingTop: 5,
        paddingRight: 8,
        paddingLeft: 8,
        paddingBottom: 0,
    },
    listItemText: {
        textDecoration: "none !important",
        flex: '0 0 auto',
        whiteSpace: 'nowrap',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 14,
        color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.secondary.main,
        }
    },
    brandText: {
        fontFamily: "'Baloo Bhaijaan', cursive",
        fontWeight: 400
    },
    logo: {
        width: "100%",
        marginTop: 10,
        paddingRight: 15
    },
    xlogo: {
        width: 43
    },
    signUp: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff !important',
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        paddingLeft: theme.spacing(1.1),
        paddingRight: theme.spacing(1.1),
        borderWidth: theme.border.borderWidth,
        borderColor: theme.border.borderColor,
        borderRadius: theme.spacing(1.5),
        fontSize: 12
    },
    login: {
        backgroundColor: theme.palette.background.default,
        fontSize: 12
    },
    notifications: {
        fontSize: 16,
        marginTop: 5,
        color: theme.palette.primary.main
    },
    download: {
        fontSize: 15,
        border: 'solid 1px',
        borderRadius: '50%',
        marginRight: 6
    },
    logout: {
        fontSize: 16,
        color: theme.palette.primary.main,
        marginRight: 5
    },
    fixedItems: {
        color: theme.palette.primary.main
    },
    divider: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    }
});



function NavBar(props) {
    const { dictionary } = useContext(LanguageContext);
    const {
        classes,
        handleMobileDrawerOpen,
        handleMobileDrawerClose,
        mobileDrawerOpened,
        selectedTab,
        isAuthenticated,
        notification,
        GetNotification
    } = props;
    const isXs = useMediaQuery('(min-width:400px)');
    const menuItems = [
        {
            name: <Text tid="cryptochange" />,
            link: '/crypto-exchange',
        },
        // {
        //     name: dictionary.tokenexchange,
        //     link: '/token-exchange',
        // },
        {
            name: dictionary.margintrading,
            link: '/margin-trading',
        },
        {
            name: dictionary.futurestrading,
            link: '/future-trading',
        },
        {
            name: dictionary.buycrypto,
            link: '/buy-crypto',
        },
        {
            name: dictionary.tokeninfobase,
            link: '/token-info-base',
        },
        {
            name: dictionary.caxrewards,
            link: '/comming-soon',
            // link: '/cax-rewards',
        },
        {
            name: dictionary.aboutus,
            link: '/about-us',
        },
    ];

    let menuItemsFixed = [
        {
            key: 'sign-up',
            name: dictionary.signup,
            link: '/sign-up',
            class: classes.signUp
        },
        {
            key: 'log-in',
            name: dictionary.login,
            link: '/login',
            class: classes.login
        }
    ];

    if (isAuthenticated) {
        menuItemsFixed = [
            {
                key: 'wallet',
                name: 'Wallet',
                link: '',
                class: ''
            },
            {
                key: 'activity',
                name: 'Activity',
                link: '',
                class: ''
            },
            {
                key: 'setting',
                name: 'Setting',
                link: '',
                class: ''
            }
        ];

    }

    useEffect(() => {
       GetNotification();
    }, [])

    return (
        <div>
            <AppBar position='fixed' elevation={0} color={'inherit'} className={classes.appbar}>
                <Toolbar disableGutters className={classes.toolbar}>
                    <Link
                        to={""}
                        className={classes.brandText}
                        display="inline"
                    >
                        <img
                            src={!isXs ? sLogoImage : LogoImage}
                            className={clsx(classes.logo, !isXs && classes.xlogo)}
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
                    <List className={classes.navigationContainer}>
                        <Hidden smDown>
                            {menuItemsFixed.map(element => {
                                return (
                                    <ListItem key={element.key} className={classes.listItem}>
                                        <Link
                                            to={element.link}
                                            className={clsx(element.class, classes.listItemText, classes.fixedItems)}
                                            onClick={handleMobileDrawerClose}
                                        >
                                            {element.name}
                                        </Link>
                                    </ListItem>
                                )
                            })}
                        </Hidden>
                        <ListItem className={clsx(classes.listItem, classes.fixedItems)}>
                            <PopupState variant="popover" popupId="demo-popup-popover">
                                {(popupState) => (
                                    <div>
                                        <Badge color="secondary" variant="dot" invisible={!notification.length}>
                                            <NotificationsIcon className={classes.notifications} {...bindTrigger(popupState)} />
                                        </Badge>
                                        <Popover
                                            {...bindPopover(popupState)}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                        >
                                            <Box p={2}>
                                                {notification.length > 0 && notification.map((notifi, index) => {
                                                    if(index === notification.length - 1)
                                                        return <Typography variant="caption" key={index}>{notifi}</Typography>;
                                                    return <Fragment  key={index}>
                                                                <Typography variant="caption">{notifi}</Typography>
                                                                <Divider className={classes.divider} />
                                                            </Fragment>;
                                                })}
                                                {!notification.length && <Typography variant="caption">No notification</Typography>}
                                            </Box>
                                        </Popover>
                                    </div>
                                )}
                            </PopupState>
                        </ListItem>
                        <ListItem className={clsx(classes.listItem, classes.fixedItems)}>
                            <ArrowDownwardIcon className={classes.download} />
                        </ListItem>
                        {isAuthenticated && <ListItem className={clsx(classes.listItem, classes.fixedItems)}>
                            <ExitToAppIcon onClick={() => { props.SignOut(props.history) }} className={classes.logout} />
                        </ListItem>}
                    </List>
                    <LanguageSelector />
                    <Hidden lgUp>
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
                isAuth={isAuthenticated}
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
    selectedTab: PropTypes.string,
    mobileDrawerOpened: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    SignOut: PropTypes.func,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    notification: state.other.notification
});

const mapDispatchToProps = {
    SignOut,
    GetNotification
};

export default withStyles(styles, { withTheme: true })(memo(connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar))));
