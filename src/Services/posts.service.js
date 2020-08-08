import axios from "axios";
import {JWT_URL} from "./API";
import AuthService from './auth.service';

class PostsData {
    
    // create post
    create(_body) {
        let user = AuthService.userData();
        return axios
        .post(JWT_URL + 'createpost', {
            author: user.id,
            body: _body
        }, {headers: { _token: user._token }})
        .then(response => {
            return true;
        });
    }

    
    // return all posts
    posts(){
        return axios.get(JWT_URL + "posts", {headers: { _token: AuthService.userData()._token }})
        .then(response => {
            // console.log(response.data);
            return response.data.data;
        });
    }

    // return all posts
    timeline(){
        let user = AuthService.userData();
        return axios.get(JWT_URL + "myposts", {headers: { _token: user._token, id: user.id }})
        .then(response => {
            // console.log(response.data);
            return response.data.data;
        });
    }


    // return active users
    active(){
        return axios.get(JWT_URL + "active", {headers: { _token: AuthService.userData()._token}})
        .then(response => {
            // console.log(response.data);
            return response.data.data;
        });
    }
}


export default new PostsData();