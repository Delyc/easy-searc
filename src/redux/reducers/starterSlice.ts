import { createSlice } from "@reduxjs/toolkit";

//creating the initial state of data

const initialState = {
    name: "",
};

export const starterSlice = createSlice({
    name: "starterSlice",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
    },

});

export const { setName} = starterSlice.actions;
export default starterSlice.reducer;
