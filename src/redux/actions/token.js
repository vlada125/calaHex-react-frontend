import axios from "axios";
import * as config from "../../static/constants";
import ActionTypes from "./actionTypes";

export const GetTokenInfoBase = () => async dispatch => {
    try {
        const res = await axios.post(`${config.BACKEND_URL}main/tokenList`);
        dispatch({
            type: ActionTypes.TokenList,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
}


export const TokenExchangePairList = () => async dispatch => {
    try {
        const res = await axios.post(`${config.BACKEND_URL}main/exchangeTokenPair`);
        dispatch({
            type: ActionTypes.TokenExchangePairList,
            payload: res.data
        });
    } catch (err) {
        console.log(err, 'TokenExchangePairList');
    }
}

export const TokenExchangeOrderList = (name = "USDT_BTC") => async dispatch => {
    try {
        const res = await axios.post(`${config.BACKEND_URL}main/exchangeOrder`, { pair: name });
        dispatch({
            type: ActionTypes.TokenExchangeOrderList,
            payload: res.data
        });
    } catch (err) {
        console.log(err, 'TokenExchangeOrderList');
    }
}

export const TokenExchangeTradList = (name = "USDT_BTC") => async dispatch => {
    try {
        const res = await axios.post(`${config.BACKEND_URL}main/exchangeTrade`, { pair: name });
        dispatch({
            type: ActionTypes.TokenExchangeTradList,
            payload: res.data
        });
    } catch (err) {
        console.log(err, 'TokenExchangeTradList');
    }
}

export const CreateToken = (newToken) => async dispatch => {
    try {
        await axios.post(`${config.BACKEND_URL}main/createToken`, newToken);
    } catch (err) {
        console.log(err);
    }
}