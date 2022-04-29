import { configureStore } from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import { reducers } from './slices';
import {persistCombineReducers, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();

const middleware = [logger, thunkMiddleware];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistCombineReducers(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default persistor;
