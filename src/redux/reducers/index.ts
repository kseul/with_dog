import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import userReducer from './userReducer';
import postsReducer from './postsReducer';
import mbtiGraphReducer from './mbtiGraphReducer';
import mbtiTextReducer from './mbtiTextReducer';
import chatReducer from './chatReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['mbtiText', 'chat'],
};

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  graph: mbtiGraphReducer,
  mbtiText: mbtiTextReducer,
  chat: chatReducer,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
