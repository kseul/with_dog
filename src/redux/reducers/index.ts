import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/es/storage/session';
import userReducer from './userReducer';
import postsReducer from './postsReducer';
import mbtiGraphReducer from './mbtiGraphReducer';
import mbtiTextReducer from './mbtiTextReducer';
<<<<<<< HEAD
import boardReducer from './boardReducer';
import boardListReducer from './boardListReducer';
=======
import chatReducer from './chatReducer';
>>>>>>> develop

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['mbtiText', 'graph', 'chat'],
};

const authPersistConfig = {
  key: 'user',
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  user: persistReducer(authPersistConfig, userReducer),
  posts: postsReducer,
  graph: mbtiGraphReducer,
  mbtiText: mbtiTextReducer,
<<<<<<< HEAD
  board: boardReducer,
  boardList: boardListReducer,
=======
  chat: chatReducer,
>>>>>>> develop
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
