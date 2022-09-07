import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postsReducer from './postsReducer';
import chatReducer from './chatReducer';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  chat: chatReducer,
});

export default rootReducer;
