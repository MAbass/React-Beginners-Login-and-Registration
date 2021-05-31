import {FAILURE, LOGIN_REQUEST, SUCCESS} from "./authTypes";


export const authenticateUser = (email, password) => {
    return dispatch => {
        dispatch(loginRequest());
        if (email === "test" && password === "test") {
            dispatch(loginSuccess())
        } else {
            dispatch(loginFailure())
        }
    }
}


const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}
const loginSuccess = () => {
    return {
        type: SUCCESS
    }
}
const loginFailure = () => {
    return {
        type: FAILURE
    }
}




