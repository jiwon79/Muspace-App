import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import userInfo from './userInfo'
import categoryFeed from './categoryFeed'

const rootReducer = combineReducers({
  counter,
  todos,
  userInfo,
  categoryFeed,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;