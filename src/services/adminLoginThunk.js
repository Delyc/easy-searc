import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl ="https://easy-search-api.onrender.com/api"

export const adminLogin = createAsyncThunk(
    'adminAuth/login',
    async ({email, password}, {rejectWithValue}) => {
        try{
            const {data} = await axios.post(`${baseUrl}/orgs/login`, {email, password})
console.log("data", data)
            localStorage.setItem("token", data.token)
            return data
        }catch(err) {
            console.log(err)
        }
    }

)