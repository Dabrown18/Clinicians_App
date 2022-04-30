import { cliniciansReducer } from './cliniciansSlice';
import { authReducer } from './authSlice';

export const reducers = {
  clinicians: cliniciansReducer,
  auth: authReducer,
};
