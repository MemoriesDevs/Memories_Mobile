import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

export const apiMemories = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    transformResponse: (response) => response,
  }),
  endpoints: (builder) => ({
    getMemorie: builder.query({
      query: (id) => `/memories/${id}`,
    }),
  }),
});

export const { useGetMemorieQuery, endpoints } = apiMemories;
