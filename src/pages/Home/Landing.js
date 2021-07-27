import React, { Fragment, useEffect } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import { Grid, Button } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AppleIcon from '@material-ui/icons/Apple';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PropTypes from "prop-types";

import Header from "./components/Header";
import TradingImage from '../../assets/trading_img.jpg';
import ListingImage from '../../assets/listing.png';
import MobileImage from '../../assets/mobile1.png';
import CommunityImage from '../../assets/community.png';

const useStyles = makeStyles(theme => ({
    root: {
      height: '100%',
      width: '100%',
      marggin: 0,
      padding: 40
    },
    container: {
      maxWidth: theme.layout.contentWidth,
      width: '100%',
      margin: '0 auto',
      paddingTop: 20,
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '15px',
    },
    cardImage: {
      padding: 30
    },
    cardContent: {
      padding: '20px 100px'
    },
    cardTitle: {
      color: theme.palette.primary.main,
      textAlign: 'center',
      textTransform: "uppercase",
      fontWeight: '500',
      marginBottom: 30,
      fontSize: 26
    },
    cardDescription: {
      fontSize: 19,
      fontWeight: '500'
    },
    round: {
      borderRadius: 25,
      padding: '10px, 20px',
      background: theme.palette.primary.main,
      color: 'white',
      textTransform: 'initial',
      textDecoration: 'none',
      margin: 20
    },
    bgGray: {
      background: theme.palette.background.gray
    },
    center: {
      textAlign: 'center'
    },
    detail: {
      color: theme.palette.primary.main,
      fontWeith: '400',
      fontSize: 16,
      textDecoration: 'none',
      marginRight: 20
    },
    socialIcons: {
      marginTop: 15,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  
  }));
  

const Landing = (props) => {

    const classes = useStyles();
    const { selectLanding } = props;
    const tradingImg = TradingImage;
    const listingImg = ListingImage;
    const mobileImg = MobileImage;
    const communityImg = CommunityImage;
    const theme = useTheme();


    useEffect(() => {
        selectLanding();
    }, [selectLanding]);
    return (
        <div className={classes.root}>
          <Header />
            <Grid container className={classes.container}>
              <Grid item md={6} className={classes.cardImage}>
                <img 
                  className={classes.image}
                  src={tradingImg}
                  alt="trading"
                />
              </Grid>
              <Grid item md={6} className={classes.cardContent}>
                <h1 className={classes.cardTitle}>Trading</h1>
                <h3 className={classes.cardDescription}>Buy, sell and trade. Buy ETH/USDT with your debit and credit card from your Calahex Wallet. Get your crypto wallet going with 38+ spot trading pairs and 19+ margin pairs</h3>
                <div className={classes.center}>
                  <Link to={""} style={{textDecoration: 'none'}}>
                    <Button
                      color="default"
                      variant="contained"
                      size="small"
                      className={classes.round}
                    >
                    View Listed Cryptos
                    </Button>
                  </Link>
                  <Link to={""} style={{textDecoration: 'none'}}>
                    <Button
                      color="default"
                      variant="contained"
                      size="small"
                      className={classes.round}
                    >
                    Futures Trading
                    </Button>
                  </Link>
                </div>
              </Grid>
            </Grid>
            <Grid container className={clsx(classes.container, classes.bgGray)}>
              <Grid item md={6} className={classes.cardContent}>
                <h1 className={classes.cardTitle}>listing</h1>
                <h3 className={classes.cardDescription}>Life is full of opportunities and so is Calahex. We root for the small and medium size businesses because they are the pillars of any economy. Get listed now on the cheapest platform there is, and meet a world full of investors</h3>
                <div className={classes.center}>
                  <Link to={""} style={{textDecoration: 'none'}}>
                    <Button
                      color="default"
                      variant="contained"
                      size="small"
                      className={classes.round}
                    >
                    Token Info Base
                    </Button>
                  </Link>
                </div>
              </Grid>
              <Grid item md={6} className={classes.cardImage}>
                <img 
                  className={classes.image}
                  src={listingImg}
                  alt="listing"
                />
              </Grid>
            </Grid>
            <Grid container className={classes.container}>
              <Grid item md={6} className={classes.cardImage}>
                <img 
                  className={classes.image}
                  src={tradingImg}
                  alt="trading"
                />
              </Grid>
              <Grid item md={6} className={classes.cardContent}>
                <h1 className={classes.cardTitle}>staking</h1>
                <h3 className={classes.cardDescription}>Let our CAX Token do all the work for you. Hold CAX and receive regular interest directly into your account with our simplified staking system. No binding periods, no problem, just relax and enjoy.</h3>
                <div className={classes.center}>
                  <Link to={""} style={{textDecoration: 'none'}}>
                    <Button
                      color="default"
                      variant="contained"
                      size="small"
                      className={classes.round}
                    >
                    Deposit CAX
                    </Button>
                  </Link>
                </div>
              </Grid>
            </Grid>
            <Grid container className={clsx(classes.container, classes.bgGray)}>
              <Grid item md={6}>
                <div className={classes.cardContent}>
                  <h1 className={classes.cardTitle}>mobile</h1>
                  <h3 className={classes.cardDescription}>Trade when, how and where you want. Trade, deposit, withdraw and transfer using our mobile app.</h3>
                </div>
                <div className={classes.center}>
                  <Link to={""} style={{textDecoration: 'none'}}>
                    <Button
                      color="default"
                      variant="contained"
                      size="small"
                      className={classes.round}
                      startIcon={<PlayArrowIcon />}
                    > Download on Google Play
                    </Button>
                  </Link>
                  <Link to={""} style={{textDecoration: 'none'}}>
                    <Button
                      color="default"
                      variant="contained"
                      size="small"
                      className={classes.round}
                      startIcon={<AppleIcon />}
                    > Download on App Store
                    </Button>
                  </Link>
                </div>
              </Grid>
              <Grid item md={6} className={classes.cardImage}>
                <img 
                  className={classes.image}
                  src={mobileImg}
                  alt="mobile"
                />
              </Grid>
            </Grid>
            <Grid container className={classes.container}>
              <Grid item md={6} style={{padding: '0 30px'}}>
                <h1 className={classes.cardTitle}>community</h1>
                <h3 className={classes.cardDescription}> Don't wait to join our community. We are a lively bunch. Keep up with us all over the world. Facebook, Twitter, Instagram and Linkedin you will find us screaming about Crypto all the time.</h3>
                <h1 className={classes.cardTitle}>24/7 Support: </h1>
                <h3 className={classes.cardDescription}> We are here for you. So if you have any questions or need guidance, let us know. Will take care of all your issues and resolve them a.s.a.p.</h3>
                <div style={{textAlign: 'right'}}> <Link to={''} className={classes.detail}>Contact</Link></div>
                <h1 className={classes.cardTitle}>Job Opportunities:  </h1>
                <h3 className={classes.cardDescription}> We are the coolest digital asset exchange in the world. If you come on board, you will enjoy the ride. If you are cool and smart than consider us family!</h3>
                <div style={{textAlign: 'right'}}> <Link to={''} className={classes.detail}>Details...</Link></div>
              </Grid>
              <Grid item md={6} style={{paddingTop: '50px'}}>
                <img 
                  className={classes.image}
                  src={communityImg}
                  alt="community"
                />
                <div className={classes.socialIcons}>
                  <FacebookIcon style={{ fontSize: 50, color: '#2091f5' }}/>
                  <TwitterIcon style={{ fontSize: 50, color: '#7ac6f3' }}/>
                  <InstagramIcon style={{ fontSize: 50, color: '#0c4475' }}/>
                  <LinkedInIcon style={{ fontSize: 50, color: '#055da6'}}/>
                </div>
              </Grid>
            </Grid>
        </div>
    );
}

Landing.propTypes = {
    selectLanding: PropTypes.func.isRequired
};

export default Landing;