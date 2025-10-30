import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ProfileState {
  name: string;
  email: string;
  password: string;
}

const initialState: ProfileState = {
  name: '',
  email: '',
  password: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    clearProfile: state => {
      state.name = '';
      state.email = '';
      state.password = '';
    },
  },
});

export const { setName, setEmail, setPassword, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
