import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

let user = 0
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    user = localStorage.getItem("user")
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
            body,
    
          }),
    })
   
})
})

export const { useAddDocMutation } = addDocSlice