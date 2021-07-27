import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';  
import { 
  Grid
} from '@material-ui/core';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import SignUpForm  from './components/SignUpForm';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
  },
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    maxWidth: 350,
    //margin: `0 50px`,
  },
  title: {
    marginBottom: 20,
    fontWeight: 400,
    fontSize: 35,
    color: theme.palette.primary.main,
  },
  sider: {
    background: theme.palette.primary.main,
    minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px + 15px)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'white'
  },
  siderlist: {
    fontSize: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%'
  },
  siderTitle: {
    color: 'white',
    fontWeight: 400
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  font11: {
    fontSize: 10
  },
  marginBottom50: {
    marginBottom: 80
  }
}));

const SignUp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container space={10}>
          <Grid item xs={3} className={classes.sider}>
            <h2 className={classes.siderTitle}>Calahex News</h2>
            <p className={classes.siderlist}><span>Wrapped Bitcoin is now listed on Calahex </span> <ArrowForwardIos className={classes.font11}/></p>
            <p className={classes.siderlist}><span>SPARK Airdrop support for XRP Holders </span> <ArrowForwardIos className={classes.font11}/></p>
            <p className={clsx(classes.siderlist, classes.marginBottom50)}><span>Hegic and zLOT are now listed on Calahex </span> <ArrowForwardIos className={classes.font11}/></p>
          </Grid>
          <Grid item md={2} sm={1}></Grid>
          <Grid item xs={7}>
            <div className={classes.formContainer}>
              <h1 className={classes.title}>SIGN UP</h1>
              <SignUpForm />
            </div>
          </Grid>
        </Grid>
    </div>
  );
};

export default SignUp;
