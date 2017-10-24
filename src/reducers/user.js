import Immutable from 'immutable';

// Here the constants file comes handy
import {
    GET_TOKEN,
    GET_TOKEN_SUCCESS,
    
    REMOVE_TOKEN,

    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_ERROR,

    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,

    CHANGE_PASSWORD,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_ERROR,
} from '../constants/userConstants';

// The initial state is just an empty Map
const initialState = Immutable.Map({
    token: null,

    loginSuccess: false,
    loginError: false,

    registerSuccess: false,
    registerError: false,

    changePasswordSuccess: false,
    changePasswordError: false,
});

/* 
 *   That's very standard reducer 
 *  function to return the next state given a dispatch action
 *
 */

const user = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOKEN_SUCCESS:
            // when visit this webApp to get token from the webStorage
            const { token } = action.payload;
            return state.merge({
                token,
            });
        
        case REMOVE_TOKEN:
            // after logout, remove the token in the web storage
            return state.merge({
                token: null,
            });

        case LOGIN: 
            // When dispatch login request, update state 
            return state.merge({
                loginSuccess: false,
                loginError: false,
            });
        
        case LOGIN_SUCCESS: 
            // when login is success, update state
            return state.merge({
                loginSuccess: true,
                loginError: false,
            });

        case LOGIN_ERROR:
            // when login is failed, update state
            return state.merge({
                loginSuccess: false,
                loginError: true,
            });

        case REGISTER: 
            // When dispatch register request, update state 
            return state.merge({
                registerSuccess: false,
                registerError: false,
            });
        
        case REGISTER_SUCCESS: 
            // when register is success, update state
            return state.merge({
                registerSuccess: true,
                registerError: false,
            });

        case REGISTER_ERROR:
            // when register is failed, update state
            return state.merge({
                registerSuccess: false,
                registerError: true,
            });

        case CHANGE_PASSWORD_SUCCESS:
            // when change password is success, update state
            return state.merge({
                changePasswordSuccess: true,
                changePasswordError: false,
            });

        case CHANGE_PASSWORD_ERROR:
            // when change password is failed, update state
            return state.merge({
                changePasswordSuccess: false,
                changePasswordError: true,
            });
        
        default:
            // the other case, return the default state
            return state;
    }
};

export default user;