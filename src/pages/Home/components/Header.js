import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { flexbox } from '@material-ui/system';
// import { Image } from 'components/atoms';
// import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 0,
    paddingRight: 40,
    paddingLeft: 40
  },
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
  Title: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 600,
    color: theme.palette.primary.main,
    fontFamily: '"Segoe UI", Arial, sans-serif'
  },
  center: {
    textAlign: 'center'
  },
  signup: {
    borderRadius: 20,
    marginRight: 20
  },
  login: {
    borderRadius: 20,
    marginLeft: 20,
    border: `1px solid ${theme.palette.primary.main}`,
    background: 'white'
  },
  links: {
    marginTop: theme.spacing(5)
  },
  link: {
    textDecoration: 'none',
    margin: '0 35px',
    fontSize: 20,
    color: theme.palette.primary.main
  },
  nonDecoration: {
    textDecoration: 'none',
  }
}));

const Header = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <h1 className={classes.Title}>
          Caribbean and Latin America <br />
            Hybrid Exchange
        </h1> 
        <div className={classes.center}>
          <Link to="sign-up" className={classes.nonDecoration}>
            <Button
              color="primary"
              variant="contained"
              size="large"
              className={classes.signup}
            >
              Sign Up
            </Button>
          </Link>
          <Link to="login" className={classes.nonDecoration}>
            <Button
              color="default"
              variant="contained"
              size="large"
              className={classes.login}
            >
              Log In
            </Button>
          </Link>
        </div>
        <div className={clsx(classes.center, classes.links)}>
          <Link to={''} className={classes.link}>Token Listing</Link>
          <Link to={''} className={classes.link}>Token Exchange</Link>
          <Link to={''} className={classes.link}>Buy Crypto</Link>
          <Link to={''} className={classes.link}>New</Link>
        </div>
    </div>
  );
};

Header.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Header;
