import { createStore, applyMiddleware } from 'redux';

// import middleware
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { Iterable } from 'immutable';

// Here root reducer for create redux store
import rootReducer from '../reducers/';

// Here root saga for create saga async action flow
import rootSaga from '../sagas/';

// create middlewares array for middleware
const middlewares = [];

// for redux-logger transform immutable data to object, for semantic
const stateTransformer = (state) => {
    if (Iterable.isIterable(state)) return state.toJS();
    else return state;
};

// create logger for dev enviroment
if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
        stateTransformer,
    });
    middlewares.push(logger);
}

// cretae saga middleware for run saga async action flow
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// Here create redux store for 
const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
);

// run saga for take async action flow
sagaMiddleware.run(rootSaga);

export default store;