import axios from "axios";

const API_URL = process.env.REACT_APP_BACKOFFICE_URL + process.env.REACT_APP_BACKOFFICE_AUTH;

class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + "login", {
                email,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }


    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();