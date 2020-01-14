import { combineReducers } from 'redux';
import homeReducers from './homeReducers/homeReducers';
import accountReducers from './accountReducers/accountReducers';
import { connectRouter } from 'connected-react-router'

const uiReducer = (state = {}, action) => {
    switch (action.type) {
        case "SHOW_SPINER_CALL_API":
            return {...state, loading: true }
        case "DONE_API_HIDE_SPINER":
            return {...state, loading: false }
        default:
            return state;
    }
}

export const rootReducer = (history) => combineReducers({
    ui: uiReducer,
    home: homeReducers,
    account: accountReducers,
    router: connectRouter(history),
})