import { Api } from './baseApi';
import { url } from './url';


let PostApi = {
    getPostId(id) {
        return Api(url + "post/getItem","get", null,null , {params: {id: "5e4108b1344f6456f80e4d54" }})
        .then((res) => { 
            console.log("RESPONSE RECEIVED: ", res);
            return res;
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
            return false;
        })
       
    }
}
export default PostApi;