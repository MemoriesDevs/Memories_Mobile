import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    transformResponse: (response) => response,
  }),
  endpoints: (builder) => ({
    getJoke: builder.query({
      query: () => '/jokes/random',
    }),
  }),
});

export const { useGetJokeQuery, endpoints } = api;
