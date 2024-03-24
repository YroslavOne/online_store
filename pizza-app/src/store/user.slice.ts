import { createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginResponse } from '../interfaces/auth.interface';
import { PREFIX } from '../helpers/API';
import axios, { AxiosError } from 'axios';

export const JWT_PERSISTENT_STATE = 'userData';

export interface UserPersistentState {
  jwt: string | null;
}

export interface UserState {
  jwt: string | null;
  loginErrorMassage?: string;
}

const initialState: UserState = {
  jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
};

export const login = createAsyncThunk(
  'user/login',
  async (params: { email: string; password: string }) => {
    try {
      const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
        email: params.email,
        password: params.password,
      });
      return data;
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(e.response?.data.message);
      }
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.jwt = null;
    },
    cleanLoginError: (state) => {
      state.loginErrorMassage = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, actions) => {
      if (!actions.payload) {
        return;
      }
      state.jwt = actions.payload.access_token;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loginErrorMassage = action.error.message;
    });
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
