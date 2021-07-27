import React, { Fragment, useEffect, useRef, useState } from "react";
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TradingViewWidget from 'react-tradingview-widget';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
// import { Link } from "react-router-dom";
// import clsx from 'clsx';
import {
    AppBar,
    Button,
    FormControl,
    Grid,
    Hidden,
    InputLabel,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Toolbar,
    Tooltip,
    Typography,
    useMediaQuery,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    FormControlLabel,
    Checkbox,
    Menu,
    ListItemText,
    ListItem,
    List
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
// import SearchIcon from '@material-ui/icons/Search';
import {
    CryptoExchangePairList,
    CryptoExchangeOrderList,
    CryptoExchangeTradList
} from '../../redux/actions/crypto';
import FutureDiv, { BgTableRow } from "./Future.style";

import PropTypes from "prop-types";
import TabPanel, { a11yProps } from "../../components/TabPanel";
import { StyledTabs, StyledTab } from "../../components/StyleTabs";
import { ButtonTab, ButtonTabs } from "../../components/buttontabs/StyleTabs";
// import DepthChart from "../../components/chart/DepthChart";
import { Link } from "react-router-dom";
import Counter from "../../components/animations/background";
import LabelSlider from "../../components/LabelSlider/LabelSlider";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
    },
    formControl: {
        // margin: theme.spacing(1),
        marginBottom: theme.spacing(2),
        width: '100%'
    },
    topInfo: {
        marginTop: 45,
        padding: '10px',
    },
    eth_h: {
        margin: 0,
        // textAlign: 'center',
        fontWeight: 500
    },
    eth_subp: {
        margin: 0,
        fontSize: 11,
        color: '#8fb5fc'
    },
    eth_p: {
        margin: 0,
        // textAlign: 'center',
        fontSize: 11,
        color: '#8fb5fc'
    },
    menuitem: {
        fontSize: 11
    },
    xrpfilter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 4
    },
    star: {
        fontSize: 15
    },
    xrpSpan: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 11,
        cursor: 'pointer'
    },
    xrpContent: {
        padding: '3px 15px 5px',
        position: 'relative',
        borderTop: '1px solid #aaa',
        borderBottom: '1px solid #aaa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    customInput: {
        border: 'none',
        paddingLeft: 5,
        maxWidth: '95%',
        minWidth: 50
    },
    searchIcon: {
        fontSize: '15px'
    },
    tables: {
        fontSize: 10
    },
    table: {
        width: '100%'
    },
    w100: {
        width: '100%'
    },
    fs11: {
        fontSize: 11
    },
    tableContainer: {
        maxHeight: 'calc(100vh - 180px)'
    },
}));

const override = css`
  display: block;
  margin: 150px auto;
  /* border-color: red; */
`;

const options = [
    'Good till cancel',
    'Immediate or cancel',
];

let timer1, timer2, timer3;

const FutureTrading = (props) => {
    let { selectLanding, isAuthenticated, cryptoLists, cryptoOrderLists, cryptoTradLists } = props;
    const classes = useStyles();
    const scrollBottom = useRef(null);
    // const [anchorElUSD, setAnchorElUSD] = useState(null);
    // const [anchorElALTS, setAnchorElALTS] = useState(null);
    // const [anchorElINNOV, setAnchorElINNOV] = useState(null);
    const [show, setShow] = useState(3);
    const [selectRow, setSelectRow] = useState({});
    // const openUSD = Boolean(anchorElUSD);
    // const openALTS = Boolean(anchorElALTS);
    // const openINNOV = Boolean(anchorElINNOV);
    const [value, setValue] = useState(0);
    const [adminPanLogin, setAdminPanLogin] = useState(0);
    const [tradingViewTab, setTradingViewTab] = useState(0);
    const [size, setSize] = useState(1);
    const [display, setDisplay] = useState('volume');
    const [search1, setSearch1] = useState('');
    const [hiddenC, setHiddenC] = useState(['sider1']);
    const [name, setName] = useState('all');
    const [placeOrder, setPlaceOrder] = useState('limit');
    const [triggerType, setTriggerType] = useState('lastprice');
    const [orderType, setOrderType] = useState('limit');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const match1 = useMediaQuery('(min-width:1400px)');
    const match2 = useMediaQuery('(min-width:1070px)');
    const isXs = useMediaQuery('(max-width:400px)');
    const [pairList, setPairList] = useState([]);
    const pairLists = ['BTC Perpetual', 'ETH Perpetual', 'BCH Perpetual', 'YFI Perpetual', 'UNI Perpetual', 'LINK Perpetual', 'TRX Perpetual'];

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    // const optionUSD = ['USDT', 'USDC', 'USDJ', 'DAI', 'PAX', 'BUSD'];
    // const optionALTS = ['ETH', 'BNB'];
    // const optionINNOV = ['LEVERAGE', 'DEFI', 'ASSESSMENT'];

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };
    const handleTradingTabChange = (e, newValue) => {
        setTradingViewTab(newValue);
    };

    const handleBuySell = (e, newValue) => {
        setAdminPanLogin(newValue)
    }

    const handlePlaceOrderChange = e => {
        setPlaceOrder(e.target.value);
    }

    const handleTriggerTypeChange = e => {
        setTriggerType(e.target.value);
    }

    const handleOrderTypeChange = e => {
        setOrderType(e.target.value);
    }

    useEffect(() => {
        props.CryptoExchangePairList(name);
        return () => {
            clearInterval(timer1);
            clearInterval(timer2);
            clearInterval(timer3);
        }
    }, []);

    useEffect(() => {
        selectLanding();
    }, [selectLanding]);

    useEffect(() => {
    }, [isAuthenticated]);

    useEffect(() => {
        clearInterval(timer1);
        clearInterval(timer2);
        // clearInterval(timer3);
        if (Object.keys(selectRow).length) {
            props.CryptoExchangeOrderList(selectRow.name);
            props.CryptoExchangeTradList(selectRow.name);
            timer1 = setInterval(() => {
                props.CryptoExchangeOrderList(selectRow.name);
            }, 2000);
            timer2 = setInterval(() => {
                props.CryptoExchangeTradList(selectRow.name);
            }, 3000);
            // timer3 = setInterval(() => {
            //     props.CryptoExchangePairList(name);
            // }, 5000);
        }
    }, [selectRow]);

    useEffect(() => {
        if (cryptoOrderLists.asks.length && scrollBottom.current) {
            scrollBottom.current.scrollIntoView({ block: "end", behavior: "smooth" });
        }
    }, [cryptoOrderLists.asks])

    useEffect(() => {

        if (!Object.keys(selectRow).length && cryptoLists.length) {
            setSelectRow(cryptoLists.filter(crypto => crypto.name === 'BTC_USDT')[0]);
            setPairList(pairLists.map(pair => {
                return ({
                    contract: pair,
                    ...cryptoLists.filter(crypto => crypto.name === `${pair.split(' ')[0]}_USDT`)[0]
                });
            }));
        }
    }, [cryptoLists])


    // const handleClick = (event, type) => {
    //     if (type === 'usd') {
    //         setAnchorElUSD(event.currentTarget);
    //         return;
    //     }
    //     if (type === 'alts') {
    //         setAnchorElALTS(event.currentTarget);
    //         return;
    //     }
    //     if (type === 'innov') {
    //         setAnchorElINNOV(event.currentTarget);
    //         return;
    //     }
    // };

    // const handleClose = () => {
    //     setAnchorElUSD(null);
    //     setAnchorElALTS(null);
    //     setAnchorElINNOV(null);
    // };

    const bookShow = (show) => {
        setShow(show);
    }
    const selectCrypto = (name) => {
        setName(name);
        // clearInterval(timer3);
        props.CryptoExchangePairList(name);
        // timer3 = setInterval(() => {
        //     props.CryptoExchangePairList(name);
        // }, 5000);
    }

    const handleSelectRow = (row) => {
        setSelectRow({ ...row });
        if (!match2) {
            setHiddenC([...hiddenC.filter(hid => hid !== 'sider1')]);
            setHiddenC(hiddenC.concat(['sider1']));
        }
    };

    const onSizeChange = (e) => {
        setSize(e.target.value);
    }

    const handleDisplay = e => {
        setDisplay(e.target.value);
    }

    const handleResponse = (target) => {
        let hidden = hiddenC.filter(hid => hid === target);
        if (hidden.length) {
            setHiddenC(hiddenC.filter(hid => hid !== target));
        } else {
            setHiddenC(hiddenC.concat([target]));
        }
    };

    const handleSearch = (e) => {
        setSearch1(e.target.value);
    }

    const tabHeader = (label, tabNum = 0) => <StyledTab className="tabButton" label={label} {...a11yProps(tabNum)} />;
    const tabbodyMarketTrade = (tabNum, selNum = 0) => (
        <TabPanel value={selNum} index={tabNum}>
            <TableContainer className="trade-market-table-container">
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Time</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Amount</TableCell>
                            {/* <TableCell align="center">Total</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cryptoTradLists.map((row, i) => (
                            <TableRow key={i}>
                                <TableCell>{row.time}</TableCell>
                                <TableCell align="right"><span className={row.type === 'sell' ? 'minus' : 'plus'}>{row.type === 'sell' ? <ArrowDownwardIcon className="font-15" /> : <ArrowUpwardIcon className="font-15" />} {row.price}</span></TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                                {/* <TableCell align="right">{row.total}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TabPanel>
    );

    const tabbodyOrderBook = (tabNum, selNum) => (
        <div className="sider2">
            <TabPanel value={selNum} index={tabNum}>
                <div className="orderBookHeader">
                    <h4>Order Book</h4>
                    <div className="show-type">
                        <Tooltip title="Buy Orders" arrow placement="bottom">
                            <div className="buy-orders" onClick={() => { bookShow(1) }}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Tooltip>
                        <Tooltip title="Sell Orders" arrow placement="bottom">
                            <div className="sell-orders" onClick={() => { bookShow(2) }}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Tooltip>
                        <Tooltip title="Order Book" arrow placement="bottom">
                            <div className="order-book" onClick={() => { bookShow(3) }}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Tooltip>
                        <Tooltip title="Order Book Grouping" arrow placement="bottom">
                            <div className="order-book-grouping">
                                <select name="order-book-grouping" id="order-book-grouping" value={size} onChange={onSizeChange}>
                                    <option value="1">1</option>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    <option value="500">500</option>
                                </select>
                            </div>
                        </Tooltip>
                    </div>
                </div>
                <div className="book-header">
                    <span>PRICE({selectRow?.name && selectRow.name.split('_')[0]})</span>
                    <span>AMOUNT({selectRow?.name && selectRow.name.split('_')[1]})</span>
                    <span>TOTAL({selectRow?.name && selectRow.name.split('_')[0]})</span>
                </div>
                <div className="orderSellBook">
                    <TableContainer className="order-buy-table-container" ref={scrollBottom}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableBody>
                                {cryptoOrderLists.asks.filter(ask => {
                                    return Number(Number(ask.price).toFixed(0)) % size === 0;
                                }).map((row, i) => (
                                    <Tooltip key={i} type={1} title={
                                        <Fragment>
                                            <div><span>Avg Price: </span><span></span></div>
                                            <div><span>Sum {selectRow?.name && selectRow.name.split('_')[0]}: sd{row.sum_total}</span><span></span></div>
                                            <div><span>Sum {selectRow?.name && selectRow.name.split('_')[1]}: sd{row.sum_amount}</span><span></span></div>
                                        </Fragment>
                                    } placement="right" arrow>
                                        <BgTableRow total={row.sum_total} max={cryptoOrderLists.asks[0].sum_total}>
                                            <TableCell align="right" className="minus">{Number(row.price).toFixed(0)}</TableCell>
                                            <TableCell align="right">{row.amount}</TableCell>
                                            <TableCell align="right">{row.total}</TableCell>
                                        </BgTableRow>
                                    </Tooltip>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className="order-sell-book">
                    <div className="order-sell-book-header">
                        <h4>{Object.keys(selectRow).length ? (selectRow.price + " " + selectRow.name.split('_')[1]) : '1'}</h4>
                    </div>
                    <TableContainer className="order-sell-table-container">
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableBody>
                                {cryptoOrderLists.bids.filter(bid => {
                                    return Number(Number(bid.price).toFixed(0)) % size === 0;
                                }).map((row, i) => (
                                    <Tooltip key={i} title={
                                        <Fragment>
                                            <div><span>Avg Price: </span><span></span></div>
                                            <div><span>Sum {selectRow?.name && selectRow.name.split('_')[0]}: {row.sum_total}</span><span></span></div>
                                            <div><span>Sum {selectRow?.name && selectRow.name.split('_')[1]}: {row.sum_amount}</span><span></span></div>
                                        </Fragment>
                                    } placement="right" arrow>
                                        <BgTableRow type={2} total={row.sum_total} max={cryptoOrderLists.bids[cryptoOrderLists.bids.length - 1].sum_total}>
                                            <TableCell align="right" className="plus">{Number(row.price).toFixed(0)}</TableCell>
                                            <TableCell align="right">{row.amount}</TableCell>
                                            <TableCell align="right">{row.total}</TableCell>
                                        </BgTableRow>
                                    </Tooltip>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </TabPanel>
        </div>
    );

    const tabbodyOpenOrders = (tabNum, selNum) => (
        <TabPanel value={selNum} index={tabNum}>
            <TableContainer className="tables">
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Price({selectRow?.name && selectRow.name.split('_')[0]})</TableCell>
                            <TableCell align="center">Amount({selectRow?.name && selectRow.name.split('_')[1]})</TableCell>
                            <TableCell align="center">Stop({selectRow?.name && selectRow.name.split('_')[0]})</TableCell>
                            <TableCell align="center">Total({selectRow?.name && selectRow.name.split('_')[0]})</TableCell>
                            <TableCell align="center">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {cryptoTradLists.map((row, i) => (
                            <TableRow key={i}>
                                <TableCell>{row.time}</TableCell>
                                <TableCell align="right"><span className={row.type === 'sell' ? 'minus' : 'plus'}>{row.price}</span></TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                                <TableCell align="right">{row.total}</TableCell>
                                <TableCell align="right">{row.total}</TableCell>
                            </TableRow>
                        ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </TabPanel>
    );

    const tabbodyFavorite = (tabNum, selNum) => (
        <TabPanel value={selNum} index={tabNum}>
            <TableContainer className="tables">
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Pair</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">24H</TableCell>
                            <TableCell align="center">Volum</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {cryptoTradLists.map((row, i) => (
                            <TableRow key={i}>
                                <TableCell>{row.time}</TableCell>
                                <TableCell align="right"><span className={row.type === 'sell' ? 'minus' : 'plus'}>{row.price}</span></TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                                <TableCell align="right">{row.total}</TableCell>
                                <TableCell align="right">{row.total}</TableCell>
                            </TableRow>
                        ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </TabPanel>
    );

    let adminPan = <Grid item className="adminPan">
        <div><h2>Start Trading</h2></div>
        <div>
            <Link to="sign-up" className="signup">
                <Button
                    color="primary"
                    variant="contained"
                    size="small"
                >
                    Sign Up
            </Button>
            </Link>
            <Link to="login" className='login'>
                <Button
                    color="default"
                    variant="contained"
                    size="small"
                >
                    Log In
            </Button>
            </Link></div>
    </Grid>

    if (isAuthenticated) {
        adminPan = <Grid item className="adminPanLogin">
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Place Order</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    size="small"
                    fullWidth
                    value={placeOrder}
                    onChange={handlePlaceOrderChange}
                    label="Order Type"
                >
                    <MenuItem value="limit">Limit</MenuItem>
                    <MenuItem value="market">Market</MenuItem>
                    <MenuItem value="stop">Stop</MenuItem>
                </Select>
            </FormControl>
            {placeOrder === "stop" && <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Trigger Type</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    size="small"
                    fullWidth
                    value={triggerType}
                    onChange={handleTriggerTypeChange}
                    label="Trigger Type"
                >
                    <MenuItem value="lastprice">Last Price</MenuItem>
                    <MenuItem value="marketprice">Market Price</MenuItem>
                    <MenuItem value="indexprice">Index Price</MenuItem>
                </Select>
            </FormControl>}
            {placeOrder === "stop" && <TextField id="outlined-basic" size="small" label="Stop Price" variant="outlined" fullWidth />}
            {placeOrder === "stop" && <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Trigger Type</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    size="small"
                    fullWidth
                    value={orderType}
                    onChange={handleOrderTypeChange}
                    label="Order Type"
                >
                    <MenuItem value="limit">Limit</MenuItem>
                    <MenuItem value="market">Market</MenuItem>
                </Select>
            </FormControl>}
            {(placeOrder === "limit" || (orderType === "market" && placeOrder === "stop")) && <TextField id="outlined-basic" size="small" label="Price" variant="outlined" fullWidth />}
            <TextField id="outlined-basic" size="small" label="Amount" variant="outlined" fullWidth />
            {/* {placeOrder !== "market" && <TextField id="outlined-basic" size="small" label="Total" variant="outlined" fullWidth />} */}
            <div className="percentage">
                <span size="small" type="primary" className="color-secondary-percent" >25%</span>
                <span size="small" type="primary" className="color-secondary-percent" >50%</span>
                <span size="small" type="primary" className="color-secondary-percent" >75%</span>
                <span size="small" type="primary" className="color-secondary-percent" >100%</span>
            </div>
            <LabelSlider />
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowRightIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Advanced</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    name="checkedI"
                                />
                            }
                            label="Post Only"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    name="checkedI"
                                />
                            }
                            label="Hidden"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    name="checkedI"
                                />
                            }
                            label="Reduce Only"
                        />
                        <div className="advancedTimeSet">
                            <span>Time in Force </span>
                            <span onClick={handleClickListItem}><p>{options[selectedIndex]}</p> <ArrowRightIcon /></span>
                            <Menu
                                id="lock-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {options.map((option, index) => (
                                    <MenuItem
                                        key={option}
                                        // disabled={index === 0}
                                        selected={index === selectedIndex}
                                        onClick={(event) => handleMenuItemClick(event, index)}
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Grid container spacing={3}>
                <Grid item xs={6}><Button fullWidth size="small" className="color-primary">Buy/Long</Button></Grid>
                <Grid item xs={6}><Button fullWidth size="small" className="color-danger">Sell/Short</Button></Grid>
            </Grid>
            <div style={{ marginTop: 20 }}>
                <div className="unitsize"><div><p><span className="label">Max Bid Price</span> 19551</p><p><span className="label">Cost</span> 0.00 USDT</p></div><div><p><span className="label">Max Ask Price </span>0.000000</p>
                    <p><span className="label">Cost</span> $0.00</p></div></div>
                <div className="unitsize"><div><p><span className="label">Max Bid Price</span> 19551</p><p><span className="label">Cost</span> 0.00 USDT</p></div><div><p><span className="label">Max Ask Price </span>0.000000</p>
                    <p><span className="label">Cost</span> $0.00</p></div></div>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={6}><Button size="small">Transfer</Button></Grid>
            </Grid>
        </Grid>
    }

    return (
        <FutureDiv className={classes.root} show={show} responsive={hiddenC} match={!match2} match1={!match1} isXs={isXs} >
            <AppBar position={'static'}>
                <Toolbar>
                    <Grid container spacing={1} className={classes.topInfo}>
                        <Grid item xs={5} sm={3} md={2}>
                            <p className={classes.eth_subp}>USDT Collateralized</p>
                            <h3 onClick={() => { handleResponse('sider1') }} className={classes.eth_h}>{selectRow?.contract ? selectRow.contract : "BTC Perpetual"} {hiddenC.filter(hid => hid === 'sider1').length ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</h3>
                        </Grid>
                        <div className="infoview">
                            <div>
                                <p className={classes.eth_p}>Last Price</p>
                                <h4 className={classes.eth_h}>{selectRow?.price && Number(selectRow?.price).toFixed(4 - (isXs ? 3 : 0))} {selectRow?.price ? selectRow?.name.split('_')[0] : "0"} </h4>
                            </div>
                            <Hidden xsDown>
                                <div><p className={classes.eth_p}>Mark Price</p>
                                    <h4 className={classes.eth_h}>0</h4>
                                </div>
                            </Hidden>
                            <Hidden smDown>
                                <div><p className={classes.eth_p}>Index Price</p>
                                    <h4 className={classes.eth_h}>0</h4>
                                </div>
                                <div><p className={classes.eth_p}>24h Volume</p>
                                    <h4 className={classes.eth_h}>0</h4>
                                </div>
                            </Hidden>
                            <Hidden xsDown>
                                <div><p className={classes.eth_p}>Open Interest</p>
                                    <h4 className={classes.eth_h}>0</h4>
                                </div>
                            </Hidden>
                            <Hidden xsDown>
                                <div><p className={classes.eth_p}>Founding Rate</p>
                                    <h4 className={classes.eth_h}>0</h4>
                                </div>
                            </Hidden>
                            <Hidden xsDown>
                                <div><p className={classes.eth_p}>Funding Settlement</p>
                                    <h4 className={classes.eth_h}>0</h4>
                                </div>
                            </Hidden>
                        </div>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Grid container spacing={1} className="content-wrapper">
                <Grid item className="sider1">
                    <Typography variant="h6" className="headerTitle" gutterBottom>
                        USDT Collateralized
                    </Typography>
                    <div className={classes.tables}>
                        {!props.isLoading && <TableContainer className={classes.tableContainer}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow className="notactve">
                                        <TableCell>Contract</TableCell>
                                        <TableCell align="right">Last Price</TableCell>
                                        <TableCell align="right">Change</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {pairList.map((row, i) => (
                                        <TableRow key={i} onClick={() => { handleSelectRow(row); }} >
                                            <TableCell>{row.contract}</TableCell>
                                            <TableCell align="right">{Number(row.price).toFixed(3)}</TableCell>
                                            <TableCell align="right"><span className="percentView">{Number(row.percent).toFixed(2)}</span></TableCell>
                                        </TableRow>
                                        // </Counter>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>}
                        <ClipLoader
                            css={override}
                            size={50}
                            color={"#123abc"}
                            loading={props.isLoading}
                        />
                    </div>
                </Grid>
                {match2 && adminPan}
                {match2 && <Grid item className="sider2">
                    <div className="orderBookHeader">
                        <h4>Order Book</h4>
                        <div className="show-type">
                            {/* <Tooltip title="Buy Orders" arrow placement="bottom">
                                <div className="buy-orders" onClick={() => { bookShow(1) }}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </Tooltip>
                            <Tooltip title="Sell Orders" arrow placement="bottom">
                                <div className="sell-orders" onClick={() => { bookShow(2) }}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </Tooltip>
                            <Tooltip title="Order Book" arrow placement="bottom">
                                <div className="order-book" onClick={() => { bookShow(3) }}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </Tooltip> */}
                            <Tooltip title="Order Book Grouping" arrow placement="bottom">
                                <div className="order-book-grouping">
                                    <select name="order-book-grouping" id="order-book-grouping" value={size} onChange={onSizeChange}>
                                        <option value="1">1</option>
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                        <option value="500">500</option>
                                    </select>
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="book-header">
                        <span>PRICE({selectRow?.name && selectRow.name.split('_')[0]})</span>
                        <span>AMOUNT({selectRow?.name && selectRow.name.split('_')[1]})</span>
                        <span>TOTAL({selectRow?.name && selectRow.name.split('_')[0]})</span>
                    </div>
                    <div className="orderSellBook">
                        <TableContainer className="order-buy-table-container" ref={scrollBottom}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableBody>
                                    {cryptoOrderLists.asks.filter(ask => {
                                        return Number(Number(ask.price).toFixed(0)) % size === 0;
                                    }).map((row, i) => (
                                        <Tooltip key={i} type={1} title={
                                            <Fragment>
                                                <div><span>Avg Price: </span><span></span></div>
                                                <div><span>Sum {selectRow?.name && selectRow.name.split('_')[0]}: {row.sum_total}</span><span></span></div>
                                                <div><span>Sum {selectRow?.name && selectRow.name.split('_')[1]}: {row.sum_amount}</span><span></span></div>
                                            </Fragment>
                                        } placement="right" arrow>
                                            <BgTableRow total={row.sum_total} max={cryptoOrderLists.asks[0].sum_total}>
                                                <TableCell align="right" className="minus">{Number(row.price).toFixed(0)}</TableCell>
                                                <TableCell align="right">{row.amount}</TableCell>
                                                <TableCell align="right">{row.total}</TableCell>
                                            </BgTableRow>
                                        </Tooltip>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className="order-sell-book">
                        <div className="order-sell-book-header">
                            <h4>{Object.keys(selectRow).length ? (selectRow.price + " " + selectRow.name.split('_')[1]) : 'sell'}</h4>
                        </div>
                        <TableContainer className="order-sell-table-container">
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableBody>
                                    {cryptoOrderLists.bids.filter(bid => {
                                        return Number(Number(bid.price).toFixed(0)) % size === 0;
                                    }).map((row, i) => (
                                        <Tooltip key={i} title={
                                            <Fragment>
                                                <div><span>Avg Price: </span><span></span></div>
                                                <div><span>Sum {selectRow?.name && selectRow.name.split('_')[0]}: {row.sum_total}</span><span></span></div>
                                                <div><span>Sum {selectRow?.name && selectRow.name.split('_')[1]}: {row.sum_amount}</span><span></span></div>
                                            </Fragment>
                                        } placement="right" arrow>
                                            <BgTableRow type={2} total={row.sum_total} max={cryptoOrderLists.bids[cryptoOrderLists.bids.length - 1].sum_total}>
                                                <TableCell align="right" className="plus">{Number(row.price).toFixed(0)}</TableCell>
                                                <TableCell align="right">{row.amount}</TableCell>
                                                <TableCell align="right">{row.total}</TableCell>
                                            </BgTableRow>
                                        </Tooltip>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Grid>}
                <Grid item className="trad-content">
                    <Grid container>
                        <Grid item className="tradingViews">
                            <AppBar position="static" color="transparent">
                                <StyledTabs
                                    value={tradingViewTab}
                                    onChange={handleTradingTabChange}
                                    variant="scrollable"
                                    scrollButtons="on"
                                    aria-label="scrollable auto tabs example"
                                >
                                    <StyledTab className="tabButton" label="Price Chart"  {...a11yProps(0)} />
                                    {/* <StyledTab className="tabButton" label="Depth Chart"  {...a11yProps(1)} /> */}
                                    {!match2 && tabHeader('Order Book', 1 + match2)}
                                    {!match1 && tabHeader('Market Trade', 2 - match2)}
                                    {!match2 && tabHeader('Positions', 3)}
                                    {!match2 && tabHeader('Close Position PNL', 4)}
                                    {!match2 && tabHeader('Open Orders', 5)}
                                    {!match2 && tabHeader('Stops', 6)}
                                    {!match2 && tabHeader('Fills', 7)}
                                    {!match2 && tabHeader('Order History', 8)}

                                </StyledTabs>
                            </AppBar>
                            <TabPanel value={tradingViewTab} index={0}>
                                {selectRow?.name && <TradingViewWidget hide_legend autosize allow_symbol_change={false} symbol={(selectRow?.name && selectRow.name.split('_').join(''))} />}
                            </TabPanel>
                            {/* <TabPanel value={tradingViewTab} index={1}>
                                <DepthChart data={cryptoOrderLists} symbol={(selectRow?.name && selectRow.name.split('_').reverse())}/>
                            </TabPanel> */}
                            {!match2 && tabbodyOrderBook(1, tradingViewTab)}
                            {!match1 && tabbodyMarketTrade(2 - match2, tradingViewTab)}
                            {/* {!match2 && tabbodyOpenOrders(4, tradingViewTab)}
                            {!match2 && tabbodyFavorite(5, tradingViewTab)} */}
                        </Grid>
                        {match1 && <Grid item className="sider3">
                            <StyledTabs value={0}>
                                {match1 && tabHeader('Market Trade', 0)}
                            </StyledTabs>
                            {match1 && tabbodyMarketTrade(0)}
                        </Grid>}
                        <Grid item xs={12} className="bottom1">
                            <div className="checkboxview"><input type="checkbox" title="Only Show Current Contract" />{match1 && <Hidden smDown><label>Only Show Current Contract</label></Hidden>}</div>
                            <StyledTabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                {match2 && tabHeader('Positions', 0)}
                                {match2 && tabHeader('Close Position PNL', 1)}
                                {match2 && tabHeader('Open Orders', 2)}
                                {match2 && tabHeader('Stops', 3)}
                                {match2 && tabHeader('Fills', 4)}
                                {match2 && tabHeader('Order History', 5)}
                            </StyledTabs>
                            {match2 && tabbodyOpenOrders(0, value)}
                            {match2 && tabbodyFavorite(1, value)}
                            {(!match2 && isAuthenticated) && adminPan}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </FutureDiv>
    );
};

FutureTrading.propTypes = {
    selectLanding: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    cryptoLists: state.crypto.cryptoLists,
    cryptoOrderLists: state.crypto.cryptoOrderLists,
    cryptoTradLists: state.crypto.cryptoTradLists,
    isLoading: state.crypto.isLoading
});

const mapDispatchToProps = {
    CryptoExchangePairList,
    CryptoExchangeOrderList,
    CryptoExchangeTradList
};

export default connect(mapStateToProps, mapDispatchToProps)(FutureTrading);