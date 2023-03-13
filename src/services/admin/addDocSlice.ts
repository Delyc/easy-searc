import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export default interface AdminDocumentInterface {
  success: boolean
  data: {
    allDocs: {
      cardNumber: string
      cardType: string
      id: string
      location: string
      nameOnDoc: string
      orgDocument: string
      phoneEMail: string
      reqDocument: string
    }[]

  }
}

let uid: string = ""
let token: string = ""
if (typeof window !== 'undefined') {
  // Perform localStorage action
  uid = String(localStorage.getItem("user"))
  token = String(localStorage.getItem("userToken"))
}

export const orgDocSlice = createApi({
  reducerPath: 'availableDocsSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://easy-search-api.onrender.com/api',
  }),
  endpoints: (builder) => ({
    addDoc: builder.mutation({
      query: (body) => ({
        url: `/document/${uid}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
          "Authorization": `Bearer ${token}`, 
        },
        body,
      }),
    }),

    fetchDocs: builder.query<AdminDocumentInterface, void>({
      query: () => ({
        url: `/document/${uid}`,
        headers: {
          "Content-Type": "application/json", 
          "Authorization": `Bearer ${token}`,
        },
      })
    })
  })
})

export const { useAddDocMutation, useFetchDocsQuery } = orgDocSlice