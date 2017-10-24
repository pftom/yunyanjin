/*
  the total space for import all reducer
  and combine them for root reducer.

*/
import { combineReducers } from 'redux-immutable';
import user from './user';


const root = combineReducers({
    user,
});

export default root;