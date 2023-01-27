import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  accessToken: string | null;
}

const initialState: AuthState = {
  accessToken: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    }
  }
});

// exportar la funcion definida

export const { setAccessToken } = authSlice.actions;

export default authSlice.reducer;
