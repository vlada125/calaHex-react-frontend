import ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    cryptoLists: [],
    isLoading: false,
    cryptoOrderLists: {
        bids: [],
        asks: []
    },
    cryptoTradLists: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.LODING:
            return({
                ...state,
                isLoading: true
            })
        case ActionTypes.CryptoExchangePairList:
            return ({
                ...state,
                cryptoLists: action.payload,
                isLoading: false
            });
        case ActionTypes.CryptoExchangeOrderList:
            return ({
                ...state,
                cryptoOrderLists: action.payload
            });
        case ActionTypes.CryptoExchangeTradList:
            return ({
                ...state,
                cryptoTradLists: action.payload
            });
        default:
            return state;
    }

}
