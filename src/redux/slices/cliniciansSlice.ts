import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Clinician } from '../../interfaces';
import { ClinicianState } from '../../interfaces';

export const INITIAL_STATE: ClinicianState = {
  isLoading: false,
  data: [],
  errorMessage: '',
  favoriteClinician: undefined,
};

const cliniciansSlice = createSlice({
  name: 'clinicians',
  initialState: INITIAL_STATE,
  reducers: {
    getClinicians: (state,action: PayloadAction<Clinician[]>) => {
      const data = [...action.payload];
      state.data = data.sort((a, b) => a.firstName.localeCompare(b.firstName));
    },
    selectFavoriteClinician: (state, action: PayloadAction<Clinician | undefined>) => {
      state.favoriteClinician = action.payload;
    },
  },
});

export const { actions: cliniciansActions, reducer: cliniciansReducer } = cliniciansSlice;
