import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    withStyles,
    withWidth,
    List,
    ListItem,
    Button,
    Grid,
    useMediaQuery,
} from "@material-ui/core";

import LogoImage from "../assets/logo_footer.png";



const styles = makeStyles(theme => ({
    jumbotron: {
        maxWidth: theme.layout.footerWidth,
        width: '100%',
        margin: '0 auto',
        padding: '10px 0',
        color: 'white'
        // padding: theme.spacing(0, 2),
    },
    footerCopyright: {
        background: theme.palette.primary.footer,
    },
    bod: {
        background: theme.palette.primary.footer,
        borderBottom: '1px solid white'
    },
    textUppercase: {
        textTransform: "uppercase",
        fontFamily: 'inherit',
        fontWeight: '500',
        lineHeight: '1.1',
    },
    center: {
        textAlign: 'center'
    },
    signup: {
    borderRadius: 20,
    marginRight: 20,
    background: 'white'
    },
    login: {
    borderRadius: 20,
    marginLeft: 20,
    border: `1px solid ${theme.palette.primary.main}`,
    background: 'white'
    },
    listItemText: {
        color: 'white',
        text: 'center',
        textDecoration: 'none',
        lineHeight: '1'
    },
    item: {
        fontSize: '19px',
        marginBottom: '30px'
    },
    navigationContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    copyrightListItem: {
        width: 'auto'
    },
    bobListItem: {
        paddingTop: '0',
        display: 'block',
        textAlign: 'center'
    },
    mt5: {
        marginTop: '5px'
    }
}));
  

function Footer(props) {
    const { className, ...rest } = props;
    const classes = styles();
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    const bobMenuItems = [
        {
            item: 'About Clahex',
            md: 2,
            xs: 12,
            subitems: [
                {
                    subitem: 'Frees Info',
                    link: '/dashboard'
                },
                {
                    subitem: 'Listed Assets',
                    link: '/dashboard'
                },
                {
                    subitem: 'Refferal',
                    link: '/dashboard'
                },
                {
                    subitem: 'Job Opportunities',
                    link: '/dashboard'
                },
               
            ]
        },
        {
            item: 'Futures Trading',
            md: 2,
            xs: 1,
            subitems: [
                {
                    subitem: 'Trade',
                    link: '/dashboard'
                },
                {
                    subitem: 'Futures Free Info',
                    link: '/dashboard'
                },
                {
                    subitem: 'Futures Contract Specification',
                    link: '/dashboard'
                },
            ]
        },
        {
            item: 'Social',
            md: 1,
            xs: 12,
            subitems: [
                {
                    subitem: 'Twitter',
                    link: '/dashboard'
                },
                {
                    subitem: 'Facebook',
                    link: '/dashboard'
                },
                {
                    subitem: 'Instagramn',
                    link: '/dashboard'
                },
                {
                    subitem: 'Linkedin',
                    link: '/dashboard'
                },
            ]
        },
        {
            item: 'Support',
            md: 1,
            xs: 12,
            subitems: [
                {
                    subitem: 'Contact',
                    link: '/dashboard'
                },
                {
                    subitem: 'Support',
                    link: '/dashboard'
                },
            ]
        },
        {
            item: 'Languages',
            md: 1,
            xs: 12,
            subitems: [
                {
                    subitem: 'Englilsh',
                    link: '/dashboard'
                },
            ]
        }
    ]

    const menuItems = [
        {
            name: 'User Agreement',
            link: '/dashboard',
        },
        {
            name: 'Privacy Policy',
            link: '/dashboard',
        },
        {
            name: 'Cookie Policy',
            link: '/dashboard',
        },
        {
            name: 'E-Sign Consent',
            link: '/dashboard',
        },
       
    ];

    return (
        <footer>
            <div className={classes.bod}>
                <div className={classes.jumbotron}>
                    <Grid container >
                        <Grid item xs={12} md={4}>
                            <div className={classes.center}>
                                <h1 className={classes.textUppercase} style={{fontSize: '36px', marginBottom: '30px'}}>Let's trade</h1>
                                <Link to="/sign-up" className={classes.listItemText}>
                                    <Button
                                        color="default"
                                        variant="contained"
                                        size="small"
                                        className={classes.signup}
                                    >   
                                        Sign Up
                                    </Button>
                                </Link>
                                <Link to="/login" className={classes.listItemText}>
                                    <Button
                                        color="default"
                                        variant="contained"
                                        size="small"
                                        className={classes.login}
                                    >
                                        Log In
                                    </Button>
                                </Link>
                            </div>
                        </Grid>
                        {
                            bobMenuItems.map(item => {
                                return (
                                    <Grid item xs={item.xs} md={item.md} key={item.item}>
                                        <div className={classes.center}>
                                            <h1 className={classes.textUppercase} style={{fontSize: '19px', marginBottom: '30px'}}>{item.item}</h1>
                                            <List>
                                                {
                                                    item.subitems.map(subitem => {
                                                        return (
                                                        <ListItem className={classes.bobListItem} key={subitem.subitem}>
                                                            <Link 
                                                                to={subitem.link}
                                                                className={classes.listItemText}>
                                                                    {subitem.subitem}
                                                            </Link>
                                                        </ListItem>
                                                        )
                                                    })
                                                }
                                            </List>
                                        </div>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </div>
            </div>
            <div className={classes.footerCopyright}>
                <div className={classes.jumbotron}>
                    <Grid container>
                        <Grid item xs={3} md={4}>
                            <Link
                                to = {"/dashboard"}
                                // className={classes.brandText}
                                display="inline"
                            >
                                <div className={classes.center} style={{paddingTop: '10px'}}>
                                    <img
                                        src={LogoImage}
                                        alt="Fooer logo"
                                    />
                                </div>
                            </Link>
                        </Grid>
                        <Grid item md={7}>
                            <div className={classes.mt5}>
                                <List className={classes.navigationContainer}>
                                    {menuItems.map(element => {
                                        return (
                                            <ListItem key={element.name} className={classes.copyrightListItem }>
                                                <Link
                                                    to={element.link}
                                                    className={classes.listItemText}
                                                >
                                                    {element.name}
                                                </Link>
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            </div>
                        </Grid>
                    </Grid> 
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
};

export default Footer;
