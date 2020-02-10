import { POST_GET_ID } from '../../actions/postActions/actionName.js';
import PostApi from '../../api/post.js';

/*
* @param: number: number //  number to increase
*
*/
export default function getPostIdAction(id) {
    return (dispatch) => {
        PostApi.getPostId(id).then(res => {
        	console.log(res);
            if (res && res.data) {
                     dispatch({
                        type: POST_GET_ID,
                        postId: res.data
                    })
                } 
            }
        );
    }
}