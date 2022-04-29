import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Clinician } from '../../interfaces';
import { ClinicianState } from '../../interfaces';
import { createAsyncThunk } from '@reduxjs/toolkit';
import mockData from '../../mockData';

const FETCH_ARTICLES = 'fetchClinicians';
export const fetchClinicians = createAsyncThunk(
  FETCH_ARTICLES,
  async () => {
    return mockData;
  }
);


export const INITIAL_STATE: ClinicianState = {
  isLoading: false,
  data: [],
  errorMessage: '',
};

const cliniciansSlice = createSlice({
  name: 'clinicians',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchClinicians.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchClinicians.fulfilled, (state, actions: PayloadAction<Clinician[]>) => {
      state.data = actions.payload;
      state.isLoading = false;
      state.errorMessage = '';
    });
    builder.addCase(fetchClinicians.rejected, (state) => {
      state.isLoading = false;
      state.errorMessage = 'Failed to get clinicians';
    });
  },
});

export const { actions: cliniciansActions, reducer: cliniciansReducer } = cliniciansSlice;
