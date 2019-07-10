import { combineReducers } from 'redux';
import promiseReducer from '../../thunk/reducers/promiseReducer';
import asyncReducer from '../../thunk/reducers/asyncReducer';
import sagaReducer from '../../saga/reducers';

export default combineReducers({
  thunkPromise: promiseReducer,
  thunkAsync: asyncReducer,
  saga: sagaReducer,
})