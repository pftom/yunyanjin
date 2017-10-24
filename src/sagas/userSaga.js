// Here saga effect function
import { call, put, take, fork, cancel } from 'redux-saga/effects';

// import action constants
import {
    GET_TOKEN,
    GET_TOKEN_SUCCESS,
    
    REMOVE_TOKEN,

    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,

    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_ERROR,

    CHANGE_PASSWORD,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_ERROR,

    LOGOUT,
} from '../constants/userConstants';

// import api and http request function
import { base, userApi } from '../config/config';
import request from '../config/request';



/*
 *  token operator flow
 *    
 */

function* removeToken() {
    try {
        yield localStorage.removeItem('token');
        yield put({ type: REMOVE_TOKEN });
    } catch (e) {
        console.log(e, 'Something has gotten wrong in the web storage');
    }
}

function* setToken(payload) {
    try {
        const { token } = payload;
        yield localStorage.setItem('token', token);
        yield put({ type: GET_TOKEN_SUCCESS, payload: { token }});
    } catch (e) {
        console.error(e, 'Something has gotten wrong in the web storage.');
    }
}

// worker Saga: will be fired on GET_TOKEN actions
function* getToken(payload) {
    try {
        const token = yield localStorage.getItem('token');
        console.log('token', token);
        yield put({ type: GET_TOKEN_SUCCESS, payload: { token }});
    } catch (e) {
        console.error(e, 'Something has gotten wrong in the web storage.');
    }
}

// watch Saga, spawn a new incrementAsync task on each GET_TOKEN
function* tokenSaga() {
    while (true) {
        yield take(GET_TOKEN);
        yield call(getToken);
    }
}

/*
 *  login flow
 *    
 */

// worker Saga: will be fired on LOGIN actions
function* loginFlow(payload) {
    try {
        const { body } = payload;
        const { token } = yield call(request.post, base + userApi.login, body);

        // login success dispatch success action and set token
        yield put({ type: LOGIN_SUCCESS });
        yield call(setToken, { token });
    } catch (e) {
        yield put({ type: LOGIN_ERROR, payload: { msg: 'Login got wrong.' }});
    }
}

// watch Saga, spawn a new incrementAsync task on each LOGIN
function* loginSaga() {
    while (true) {
        const { payload } = yield take(LOGIN);
        const task = yield fork(loginFlow, payload);
        
        const action = yield take([LOGOUT, LOGIN_ERROR]);
        if (action.type === LOGOUT) {
            yield cancel(task);
        }
        yield call(removeToken);
        
    }
}



/*
 *  register flow
 *    
 */

// worker Saga: will be fired on REGISTER actions
function* registerFlow(payload) {
    try {
        const { body } = payload;
        yield call(request.post, base + userApi.register, body);
        
        // after register success, direct login
        yield call(loginFlow, payload);
        yield put({ type: REGISTER_SUCCESS });
    } catch (e) {
        yield put({ type: LOGIN_ERROR, payload: { msg: 'Login got wrong.' }});
    }
}

// watch Saga, spawn a new incrementAsync task on each REGISTER
function* registerSaga() {
    while (true) {
        const { payload } = yield take(REGISTER);
        yield call(registerFlow, payload);   
    }
}


/*
 *  register flow
 *    
 */

// worker Saga: will be fired on CHANGE_PASSWORD actions
function* changePasswordFlow(payload) {
    try {
        const { body, token } = payload;
        console.log('payload', payload);
        yield call(request.post, base + userApi.changePassword, body, token);
        
        yield put({ type: CHANGE_PASSWORD_SUCCESS });
    } catch (e) {
        yield put({ 
            type: CHANGE_PASSWORD_ERROR, 
            payload: { msg: 'change password got wrong.' 
        }});
    }
}

// watch Saga, spawn a new incrementAsync task on each CHANGE_PASSWORD
function* changePasswordSaga() {
    while (true) {
        const { payload } = yield take(CHANGE_PASSWORD);
        yield call(changePasswordFlow, payload);   
    }
}



/*
 *  logout flow
 *    
 */

// watch Saga, spawn a new incrementAsync task on each LOGOUT
function* logoutSaga() {
    while (true) {
        yield take(LOGOUT);
        yield call(removeToken);
    }
}

export {
    tokenSaga,
    loginSaga,
    registerSaga,
    changePasswordSaga,
    logoutSaga,
}