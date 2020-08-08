import axios from "axios";
import {JWT_URL} from "./API";


class AuthService {
    
    // Login function and set access token for the user
    login(email, password) {
        return axios
        .post(JWT_URL + 'login', {
            email, password
        })
        .then(response => {
            // console.log(response.status);
            if (response.data.data._token) {
                localStorage.setItem("user", JSON.stringify(response.data.data));
                return true;
            }
        });
    }


    // Register function and store data in database
    register(first_name, last_name, email, gender, password, confirm_password) {
        return axios
        .post(JWT_URL + "register", {
            first_name, last_name, email, gender, password, confirm_password
        })
        .then(res => {
            return (JSON.stringify(res.status));
        })
        .catch(err => {
            return (JSON.stringify(err.response.data));
        });
    }

    
    // LogOut function ==> Remove user from local storage & sessions
    logout(){
        let user = JSON.parse(localStorage.getItem('user'));
        console.log(user._token, ' :: ', user.id);
        return axios.post(JWT_URL + "logout", {id: user.id}, {headers: { _token: user._token }})
        .then(response => {
            localStorage.removeItem("user");
            return true;
        });
    }


    // Return logined user data 
    userData(){
        return JSON.parse(localStorage.getItem('user'));
    } //user
}


export default new AuthService();