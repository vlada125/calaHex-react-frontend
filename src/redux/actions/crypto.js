import axios from "axios";
import * as config from "../../static/constants";
import ActionTypes from "./actionTypes";

export const CryptoExchangePairList = (name = "all") => async dispatch => {
    try {
        dispatch({
            type: ActionTypes.LODING
        });
        let res = await axios.post(`${config.BACKEND_URL}main/exchangeCryptoPair`, { pair_end: name });
        if(name === "all") {
            res.data = res.data.map(dat => ({...dat, name: dat.name.split('_').reverse().join('_')}));
        }
        dispatch({
            type: ActionTypes.CryptoExchangePairList,
            payload: res.data
        });
    } catch (err) {
        console.log(err, 'CryptoExchangePairList');
    }
}

export const CryptoExchangeOrderList = (name = "USDT_BTC") => async dispatch => {
    try {
        let res = await axios.post(`${config.BACKEND_URL}main/exchangeOrder`, { pair: name });
        res.data.asks.reverse();
        dispatch({
            type: ActionTypes.CryptoExchangeOrderList,
            payload: res.data
        });
    } catch (err) {
        console.log(err, 'CryptoExchangeOrderList');
    }
}

export const CryptoExchangeTradList = (name = "USDT_BTC") => async dispatch => {
    try {
        const res = await axios.post(`${config.BACKEND_URL}main/exchangeTrade`, { pair: name });
        dispatch({
            type: ActionTypes.CryptoExchangeTradList,
            payload: res.data
        });
    } catch (err) {
        console.log(err, 'CryptoExchangeTradList');
    }
}