import alerts from '@/components/utils/Alert';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { registerUser, userLogin } from '../actions/authActions';

let userToken: string | null = null;

if (typeof window !== 'undefined') {
    // Perform localStorage action
    // initialize userToken from local storage
    userToken = localStorage.getItem('userToken') ?? null;
}

interface AuthState {
    loading: boolean;
    userInfo: any;
    userToken: string | null;
    error: string | null;
    success: boolean;
}

const initialState: AuthState = {
    loading: false,
    userInfo: null,
    userToken,
    error: null,
    success: false,
};

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken'); // delete token from storage
            toast.info("Logged out successfully")
            state.loading = false;
            state.userInfo = null;
            state.userToken = null;
            state.error = null;
        },
        setCredentials: (state, action: PayloadAction<any>) => {
            state.userInfo = action.payload;
        },
    },
    extraReducers: (builder) => {
        // login user
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.userInfo = action.payload;
            state.userToken = action.payload.userToken;
        });
        builder.addCase(userLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
        // register user
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(registerUser.fulfilled, (state) => {
            state.loading = false;
            state.success = true; // registration successful
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;
