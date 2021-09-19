import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import userInfo from './userInfo'

const rootReducer = combineReducers({
  counter,
  todos,
  userInfo
});

export default rootReducer;