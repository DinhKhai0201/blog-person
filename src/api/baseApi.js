import axios from 'axios';

/**
 * @param {*} url : string // url remote
 * @param {*} method : string // GET or POST
 * @param {*} dataBody : object // data body
 * @param {*} token: string // token auth2 from server
 */
export const Api = (url, method, dataBody = null, token = null) => {
    let header =  {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
    }
    let axiosConfig =  {
        method: method,
        url: url, 
        headers: header,
        data: dataBody
    }
    if (!token) {
        delete header.Authorization;
    }
    if (!dataBody) {
        delete axiosConfig.data;
    }

    
    return axios(axiosConfig)
      
}