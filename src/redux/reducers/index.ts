import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
});

export default rootReducer;
