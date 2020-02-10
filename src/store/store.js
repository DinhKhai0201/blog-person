import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from '../reducers/rootReducer'
import { middleware } from '../middleware/middleware'
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { GetToken } from '../common/utilities/utilities';

const history = createBrowserHistory();

/**
 * Get token saved
 */
let userAccount = GetToken() || {
    accesstoken: '',
    isAuthenticated: false
   
};
const initState = {
        account: {...userAccount,
            register: {
                result: false,
                message: ''
            }
        },
        home: {
            post: [],
            category: []
        },
        postId: [],
        ui: {
            loading: false
        }
    }
    /**
     * configure redux devtools
     */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/**
 * Export store
 */
export const store = createStore(
    rootReducer(history),
    initState,
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            middleware,
            thunk
        )
    )
);