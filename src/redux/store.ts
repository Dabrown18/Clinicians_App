import { configureStore } from '@reduxjs/toolkit';
import { cliniciansReducer } from './cliniciansSlice';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger();

const middleware = [logger, thunk];

export const store = configureStore({
  reducer: {
    clinicians: cliniciansReducer,
  },
  middleware,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
