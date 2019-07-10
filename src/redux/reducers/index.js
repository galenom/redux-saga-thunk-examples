import { combineReducers } from 'redux';
import thunkReducer from './thunkReducer';

export default combineReducers({
  thunkReduxState: thunkReducer,
})