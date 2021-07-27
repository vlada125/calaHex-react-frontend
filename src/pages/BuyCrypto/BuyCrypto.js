import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from "react-router-dom";
import newCard from "../../assets/newcard.png";
import paypal from "../../assets/paypal.png";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
import payoneer from "../../assets/payoneer.png";
// import clsx from 'clsx';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import BuyCryptoDiv from "./BuyCrypto.style";
import TradingViewWidget from 'react-tradingview-widget';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { CryptoExchangePairList } from '../../redux/actions/crypto';

import PropTypes from "prop-types";

const override = css`
  display: block;
  margin: 10px;
  /* border-color: red; */
`;

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    margin: 0,
    marginTop: 60,
    padding: "10px 50px",
  },
  cardWidget: {
    width: '100%',
    marginTop: 20
  },
  formControl: {
    // margin: theme.spacing(1),
    marginBottom: theme.spacing(2),
    width: '100%'
  }
}));


function getSteps() {
  return ['Input amount', 'Confirm payment detail', 'Complete 3DS Safety Certification', 'Complete payment'];
}

const BuyCrypto = (props) => {
  let { selectLanding, isAuthenticated, CryptoExchangePairList, cryptoLists, isLoading } = props;
  const classes = useStyles();
  const isXs = useMediaQuery('(min-width:400px)');
  const [payMethod, setPayMethod] = useState('newcard');
  const [symbol, setSymbol] = useState('BTC/USDT')

  useEffect(() => {
    selectLanding();
  }, [selectLanding]);

  useEffect(() => {
  }, [isAuthenticated]);

  useEffect(() => {
    CryptoExchangePairList();
  }, [])

  const handleClick = method => {
    setPayMethod(method);
  }

  const handleSymbol = sym => {
    setSymbol(sym);
  }

  const steps = getSteps();
  return (
    <BuyCryptoDiv className={classes.root}>
      <Grid container spacing={1} className="content-wrapper">
        <Grid item xs={12}>
          <h1>{symbol.split('/')[0]}<span className="small">/ {symbol.split('/')[1]}</span></h1>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={9}>
              {!isLoading && <h1 className="price">{cryptoLists.length > 0 && Number(cryptoLists.filter(crypto => crypto.name == symbol.split('/').join("_"))[0].price).toFixed(2)} <span className="percent">{cryptoLists.length > 0 && Number(cryptoLists.filter(crypto => crypto.name == symbol.split('/').join("_"))[0].percent).toFixed(2)} %</span></h1>}
              <ClipLoader
                css={override}
                size={30}
                color={"#123abc"}
                loading={isLoading}
              />
              <TradingViewWidget hide_legend allow_symbol_change={false} width="100%" height={400} symbol={"POLONIEX:" + symbol.replace('/', '')} />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              {/* <div>
                                <Button size="small" variant="contained" color="primary">1m</Button>
                                <Button size="small" type="primary">1h</Button>
                                <Button size="small" type="primary">1d</Button>
                              </div> */}
              <Grid container spacing={2}>
                <Grid item xs={4} sm={4} md={12}>
                  <Card className={classes.cardWidget} variant="outlined" onClick={() => { handleSymbol("BTC/USDT") }}>
                    <CardContent>
                      <Typography className="cardTitle" color="textSecondary" gutterBottom>
                        BTC / USDT
                                        </Typography>
                      <Typography variant="subtitle1" className="cardPrice" component="h2">
                        {cryptoLists.length > 0 && Number(cryptoLists.filter(crypto => crypto.name == "BTC_USDT")[0].price).toFixed(2)}
                      </Typography>
                      <Typography className="cardChange" color="textSecondary">
                        {cryptoLists.length > 0 && Number(cryptoLists.filter(crypto => crypto.name == "BTC_USDT")[0].percent).toFixed(2)} %
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={12}>
                  <Card className={classes.cardWidget} variant="outlined" onClick={() => { handleSymbol("ETH/USDT") }}>
                    <CardContent>
                      <Typography className="cardTitle" color="textSecondary" gutterBottom>
                        ETH / USDT
                                        </Typography>
                      <Typography variant="subtitle1" className="cardPrice" component="h2">
                        {cryptoLists.length > 0 && Number(cryptoLists.filter(crypto => crypto.name == "ETH_USDT")[0].price).toFixed(2)}
                      </Typography>
                      <Typography className="cardChange" color="textSecondary">
                        {cryptoLists.length > 0 && Number(cryptoLists.filter(crypto => crypto.name == "ETH_USDT")[0].percent).toFixed(2)} %
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={12}>
                  <Card className={classes.cardWidget} variant="outlined" onClick={() => { handleSymbol("ETH/BTC") }}>
                    <CardContent>
                      <Typography className="cardTitle" color="textSecondary" gutterBottom>
                        ETH / BTC
                                      </Typography>
                      <Typography variant="subtitle1" className="cardPrice" component="h2">
                        {cryptoLists.length > 0 && Number(cryptoLists.filter(crypto => crypto.name == "ETH_BTC")[0].price).toFixed(2)}
                      </Typography>
                      <Typography className="cardChange" color="textSecondary">
                        {cryptoLists.length > 0 && Number(cryptoLists.filter(crypto => crypto.name == "ETH_BTC")[0].percent).toFixed(2)} %
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className="buyCryptoCard" variant="outlined">
            <CardContent>
              <div className="cardHeader">
                <Typography className={classes.title} gutterBottom>
                  Buy Crypto
                            </Typography>
                <Button className="cardAction">Sell Crypto <ChevronRightIcon /></Button>
              </div>
              <div className="cardBody">
                <TextField id="outlined-basic" className="inputPrice" size="small" label="" fullWidth InputProps={{
                  endAdornment: <InputAdornment position="end">
                    <span className="unit">$</span> <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                    // value={age}
                    // onChange={handleChange}
                    >
                      <MenuItem value={10}>USD</MenuItem>
                      <MenuItem value={20}>EUR</MenuItem>
                    </Select>
                  </InputAdornment>,
                }} />

                <div className="selectPayUnit">
                  <span className="pre-text">Coin</span>
                  <FormControl>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                    // value={age}
                    // onChange={handleChange}
                    >
                      <MenuItem value={10}>BTC</MenuItem>
                      <MenuItem value={20}>USDT</MenuItem>
                      <MenuItem value={30}>ETH</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={`selectPayMethod ${payMethod === 'newcard' ? 'active' : ''}`} onClick={() => handleClick('newcard')}>
                  <span className="pre-text">Pay With</span>
                  <img className="paymentLogo newcard" src={newCard} width={75} alt="newcard" />
                  <span className="after-text">New Card</span>
                </div>
                <div className={`selectPayMethod ${payMethod === 'paypal' ? 'active' : ''}`} onClick={() => handleClick('paypal')}>
                  <span className="pre-text">Pay With</span>
                  <img className="paymentLogo paypal" src={paypal} width={75} alt="paypal" />
                  {/* <span className="after-text">New Card</span> */}
                </div>
                <div className={`selectPayMethod ${payMethod === 'payoneer' ? 'active' : ''}`} onClick={() => handleClick('payoneer')}>
                  <span className="pre-text">Pay With</span>
                  <img className="paymentLogo payoneer" src={payoneer} width={75} alt="payoneer" />
                  {/* <span className="after-text">New Card</span> */}
                </div>
                <Button fullWidth variant="contained" color="primary" className={classes.button}>
                  Buy BTC
                            </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={9}>
          <h2 className="payment-title">How To Buy With Bank Card</h2>
          <Stepper activeStep={1} alternativeLabel className="payment-step">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
      </Grid>
    </BuyCryptoDiv>
  );
};

BuyCrypto.propTypes = {
  selectLanding: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  cryptoLists: state.crypto.cryptoLists,
  isLoading: state.crypto.isLoading
});

const mapDispatchToProps = {
  CryptoExchangePairList
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyCrypto);