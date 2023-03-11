import { createSlice } from "@reduxjs/toolkit";
import registerAdmin from './actions/adminRegister'

const initialState = {
    token : null,
    loading: false,
    error: null,
    success: false,
    adminInfo: null,

}



export const adminLoginSlice = createSlice({
    name: "adminAuthLogin",
    initialState,
    reducers: {

    },
    extraReducers:{
        // [registerAdmin.pending] : (state) => {
        //     state.loading = true
        //     state.error = null
        // },
        // [registerAdmin.fulfilled] : (state) => {
        //     state.loading = false
        //     state.success = true
        // },
        // [registerAdmin.rejected] : (state, {payload}) => {
        //     state.loading = false
        //     state.error = payload
        // }

    },

});

export default adminLoginSlice.reducer;