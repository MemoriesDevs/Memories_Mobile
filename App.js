import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/app/stores';
import AppRoute from './src/routes';

export default function App() {
  return (
    <Provider store={store}>
      <AppRoute />
      <StatusBar />
    </Provider>
  );
}
