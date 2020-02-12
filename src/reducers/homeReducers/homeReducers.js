import { HOME_RENDER_POST } from '../../actions/homeActions/actionName.js'

/*
*
* @param state: array // substate of store for home page
* @param action: action dispatched from Home component
*
*/
export default function homeReducers(state = {}, action) {
    switch (action.type) {
        case HOME_RENDER_POST:
            return { ...state, posts: action.post };
        default:
            return state;
    }
}