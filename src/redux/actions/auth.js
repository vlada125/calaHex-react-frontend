import ActionTypes from './actionTypes';
import axios from 'axios';

import { setItem } from '../../utils/helper';

import * as config from '../../static/constants';

export const SignupUser = (user, history) => async dispatch => {
    try {
        await axios.post(`${config.BACKEND_URL}auth/signup`, {...user, name: user.email, role: 'user'});
        history.push('login');
        dispatch({
            type: ActionTypes.SignupUser,
            payload: user
        })
    } catch(err) {
        dispatch({
            type: ActionTypes.SignupUserError,
            payload: err.response.data.errors
        });
    }
}

export const SigninUser = (user, history) => async dispatch => {
    try {
        let res = await axios.post(`${config.BACKEND_URL}auth/login`, {...user});
        setItem('access_token', res.data.access_token);
        history.push('');
        dispatch({
            type: ActionTypes.SigninUser,
            payload: res.data
        });
    } catch(err) {
        dispatch({
            type: ActionTypes.SigninUserError,
            payload: err.response.data
        });
    }

}

export const SignOut = (history) => dispatch => {

    // delete token function call here
    setItem('access_token');
    history.push('login');
    dispatch({
        type: ActionTypes.SignOut
    })
}

export const setCurrentUser = (user) => {
    return {
        type: ActionTypes.SetCurrentUser,
        payload: user
    }
}
