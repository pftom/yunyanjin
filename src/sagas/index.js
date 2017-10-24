// import redux-saga effect
import { all } from 'redux-saga/effects';

// import all userSaga for handle in one place
import {
    tokenSaga,
    loginSaga,
    registerSaga,
    logoutSaga,
} from './userSaga';

const rootSaga = function* () {
    yield all([
        tokenSaga(),
        
        registerSaga(),
        loginSaga(),
        logoutSaga(),
    ]);
};

export default rootSaga;