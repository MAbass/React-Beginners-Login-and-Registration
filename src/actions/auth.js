import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth-service";

export function register(username, email, password) {
    return function (dispatch) {
        return AuthService.register(username, email, password).then(
            function (response) {
                dispatch({
                    type: REGISTER_SUCCESS,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: response.data.message,
                });

                return Promise.resolve();
            },
            function (error) {
                const message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                dispatch({
                    type: REGISTER_FAIL,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: message,
                });

                return Promise.reject();
            }
        );
    };
}

export function login(username, password) {
    return function (dispatch) {
        return AuthService.login(username, password).then(
            (data) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {user: data},
                });
                return Promise.resolve();
            },
            (error) => {
                const message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                dispatch({
                    type: LOGIN_FAIL,
                });
                dispatch({
                    type: SET_MESSAGE,
                    payload: message,
                });

                return Promise.reject();
            }
        );
    };
}

export function logout() {
    return function (dispatch) {
        AuthService.logout();
        dispatch({
            type: LOGOUT,
        });
    };
}




