import { createStore } from 'redux';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());
export const persistor = persistStore(store);

export default store;
