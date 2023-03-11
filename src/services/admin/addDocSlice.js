import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

let user = 0
let token = ""
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    user = localStorage.getItem("user")
    token = localStorage.getItem("userToken")
  }

export const addDocSlice = createApi({
  reducerPath: 'availableDocsSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://easy-search-api.onrender.com/api',
  }),
  endpoints: (builder) => ({
    addDoc: builder.mutation({
        query: (body) => ({
            url: `/document/${user}`,
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Example header
              "Authorization": `Bearer ${token}`, // Example header
            },
            body,
    
          }),
    })
   
})
})

export const { useAddDocMutation } = addDocSlice