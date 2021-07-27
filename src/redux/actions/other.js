import ActionTypes from './actionTypes';
import axios from 'axios';

import * as config from '../../static/constants';

export const GetNews = () => async dispatch => {
    try {
        const res = await axios.post(`${config.BACKEND_URL}main/news`);
        dispatch({
            type: ActionTypes.GetNews,
            payload: res.data
        })
    } catch(err) {
        console.log(err);
    }
}

export const GetNotification = () => async dispatch => {
    try {
        const res = await axios.post(`${config.BACKEND_URL}main/notification`);
        dispatch({
            type: ActionTypes.GetNotification,
            payload: res.data
        })
    } catch(err) {
        console.log(err);
    }
}
