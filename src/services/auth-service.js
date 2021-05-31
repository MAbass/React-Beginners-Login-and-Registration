import axios from "axios";

const API_URL = "http://localhost:8090/api/user/";

function register(username, email, password) {
    return axios.post(API_URL, {
        "username": username,
        "password": password,
        "email": email
    });
}

function login(username, password) {
    return axios
        .post(API_URL + "search/", {"username": username, "password": password})
        .then((response) => {
            if (response.data.username !== null) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
}

function logout() {
    localStorage.removeItem("user");
    console.log("Logout Successful");
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    register,
    login,
    logout,
};