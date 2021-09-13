import { combineReducers } from 'redux';
import login from './login'
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
  login
});

export default rootReducer;