import {FAILURE, LOGIN_REQUEST, SUCCESS} from "./authTypes";


const initialState = {
    isLoginIn: ""
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state};
        case FAILURE:
            return {
                isLoginIn: action.payload
            };
        case SUCCESS:
            return {
                isLoginIn: action.payload
            };
        default:
            return this.state
    }
}



