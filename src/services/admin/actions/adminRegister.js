import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = "https://easy-search-api.onrender.com/api"


export const registerAdmin = createAsyncThunk(
    'auth/register',
    async ({ orgName, phone, location, email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            await axios.post(`${baseUrl}/orgs`,
                { orgName, phone, location, email, password },
                config)
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)