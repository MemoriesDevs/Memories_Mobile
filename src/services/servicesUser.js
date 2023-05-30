import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

export const apiUser = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    transformResponse: (response) => response,
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => '/users/1',
    }),
  }),
});

export const { useGetUserQuery, endpoints } = apiUser;
