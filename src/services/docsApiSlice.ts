import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export default interface DocumentInterface{
    success: boolean
    data : {
        allDocuments : {
                cardNumber : string 
                cardType : string
                id : string
                location : string
                nameOnDoc : string
                orgDocument : string
                phoneEMail : string
                reqDocument : string
        }[]
        }
    }
    
export const availableDocsSlice = createApi({
  reducerPath: 'availableDocsSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://easy-search-api.onrender.com/api',
  }),
  endpoints: (builder) => ({
    availableDocs: builder.query<DocumentInterface, void>({
      query: () =>  `/document`
    }),

    declareLostDoc: builder.mutation({
        query: (body) => ({
            url: `/declare`,
            method: "POST",
            body,
    
          }),
    })
   
})
})

export const { useAvailableDocsQuery, useDeclareLostDocMutation } = availableDocsSlice