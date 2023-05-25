import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import { api } from '../services/services';

export const setupStore = (preloadedState) => configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  preloadedState,
});

export const store = setupStore();

setupListeners(store.dispatch);

export default store;
