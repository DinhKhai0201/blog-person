import { HOME_RENDER_POST, HOME_INCREASE_VIEW_POST } from '../../actions/homeActions/actionName.js'

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
        case HOME_INCREASE_VIEW_POST:
            return { ...state};
        default:
            return state;
    }
}