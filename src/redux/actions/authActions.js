import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const baseUrl = "https://easy-search-api.onrender.com/api"

// const backendURL = 'http://127.0.0.1:5000'

export const userLogin = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        `${baseUrl}/orgs/login`,
        { email, password },
        config
      )


      if (typeof window !== 'undefined') {
        // Perform localStorage action
         // store user's token in local storage
        localStorage.setItem('userToken', data.token)
        localStorage.setItem('user', data.data._id)
      }
      
     
     

      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const registerUser = createAsyncThunk(
  'user/register',
  async ({ orgName, phone, location, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      await axios.post(
        `${baseUrl}/orgs`,
        { orgName, phone, location, email, password },
        config
      )
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
