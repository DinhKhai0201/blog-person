import { ACCOUNT_LOGIN, ACCOUNT_LOGIN_FAIL , ACCOUNT_REGISTER } from '../../actions/accountActions/actionName.js'
import { SetToken } from '../../common/utilities/utilities';

/*
*
* @param state: array // substate of store for home page
* @param action: action dispatched from Home component
*
*/
export default function accountReducers(state = {}, action) {
    switch (action.type) {
        case ACCOUNT_LOGIN:
        	SetToken(action.accesstoken);
            return { ...state, accesstoken: action.accesstoken, isAuthenticated: true };
        case ACCOUNT_LOGIN_FAIL:
            return { ...state};
        case ACCOUNT_REGISTER:
            return { ...state, register : {result: action.result, message: action.message} };
        default:
            return state;
    }
}