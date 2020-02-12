import { HOME_RENDER_POST, HOME_INCREASE_VIEW_POST } from '../../actions/homeActions/actionName.js';
import HomeApi from '../../api/home.js';

/*
* @param: number: number //  number to increase
*
*/
export function renderPostAction() {
    return (dispatch) => {
        HomeApi.renderPost().then(res => {
        	console.log(res);
            if (res && res.data && res.data.length > 0) {
                     dispatch({
                        type: HOME_RENDER_POST,
                        post: res.data
                    })
                } 
            }
        );
    }
}

export function increaseViewPostAction(id, view) {
    return (dispatch) => {
        HomeApi.increaseViewPost(id, view).then(res => {
        	console.log(res);
            if (res && res.data && res.data.success == true) {
                     dispatch({
                        type: HOME_INCREASE_VIEW_POST
                    })
                } 
            }
        );
    }
}