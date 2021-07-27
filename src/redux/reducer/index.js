import {combineReducers} from 'redux';

import authReducer from './auth';
import tokenReducer from './token';
import cryptoReducer from "./crypto";
import otherReducer from "./other";

export default combineReducers({
    auth: authReducer,
    token: tokenReducer,
    crypto: cryptoReducer,
    other: otherReducer
});

