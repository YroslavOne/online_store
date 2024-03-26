import { createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginResponse } from '../interfaces/auth.interface';
import { PREFIX } from '../helpers/API';
import axios, { AxiosError } from 'axios';
import { Profile } from '../interfaces/user.interface';
import { RootState } from './store';

export const JWT_PERSISTENT_STATE = 'userData';

export interface UserPersistentState {
  jwt: string | null;
}

export interface UserState {
  jwt: string | null;
  loginErrorMassage?: string;
  registerErrorMassage?: string;
  profile?: Profile;
}

const initialState: UserState = {
	jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null
};

export const login = createAsyncThunk(
	'user/login',
	async (params: { email: string; password: string }) => {
		try {
			const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
				email: params.email,
				password: params.password
			});
			return data;
		} catch (e) {
			if (e instanceof AxiosError) {
				throw new Error(e.response?.data.message);
			}
		}
	}
);
export const register = createAsyncThunk(
	'user/register',
	async (params: { email: string; password: string; name: string }) => {
		try {
			const { data } = await axios.post<LoginResponse>(
				`${PREFIX}/auth/register`,
				{
					email: params.email,
					password: params.password,
					name: params.name
				}
			);
			return data;
		} catch (e) {
			if (e instanceof AxiosError) {
				throw new Error(e.response?.data.message);
			}
		}
	}
);

export const getProfile = createAsyncThunk<Profile, void, { state: RootState }>(
	'user/getProfile',

	async (_, thunkApi) => {
		const jwt = thunkApi.getState().user.jwt;

		const { data } = await axios.get<Profile>(`${PREFIX}/user/profile`, {
			headers: {
				Authorization: `Bearer ${jwt}`
			}
		});
		return data;
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
		cleanRegisterError: (state) => {
			state.registerErrorMassage = undefined;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			if (!action.payload) {
				return;
			}
			state.jwt = action.payload.access_token;
		});
		builder.addCase(login.rejected, (state, action) => {
			state.loginErrorMassage = action.error.message;
		});
		builder.addCase(getProfile.fulfilled, (state, action) => {
			state.profile = action.payload;
		});
		builder.addCase(register.fulfilled, (state, action) => {
			if (!action.payload) {
				return;
			}
			state.jwt = action.payload.access_token;
		});
		builder.addCase(register.rejected, (state, action) => {
			state.registerErrorMassage = action.error.message;
		});
	}
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
