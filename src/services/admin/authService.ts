import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface AuthApiState {
  userToken: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://redux-user-auth.up.railway.app/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as { auth: AuthApiState }).auth.userToken;
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
        return headers
      }
    },
  }),
  endpoints: (build) => ({
    getDetails: build.query({
      query: () => ({
        url: 'api/user/profile',
        method: 'GET',
      }),
    }),
  }),
})
export const { useGetDetailsQuery } = authApi;