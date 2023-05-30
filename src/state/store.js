import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import { apiUser } from '../services/servicesUser';
import { apiMemories } from '../services/servicesMemories';

export const setupStore = (preloadedState) => configureStore({
  reducer: {
    [apiUser.reducerPath]: apiUser.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiUser.middleware),
  preloadedState,
});

export const store = setupStore();

setupListeners(store.dispatch);

export default store;
