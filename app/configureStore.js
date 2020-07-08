import AsyncStorage from '@react-native-community/async-storage';
import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import rootReducer from './ducks';

export default function configureStore(initialState = {}) {
  const persistConfig = {
    key: 'root_timer',
    storage: AsyncStorage,
    whitelist: [],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  // Store
  const store = createStore(persistedReducer, initialState);

  return store;
}
