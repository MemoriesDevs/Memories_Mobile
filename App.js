/* eslint-disable import/no-named-as-default */
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import AppRoute from './src/routes';
import store from './src/state/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppRoute />
      <StatusBar />
    </Provider>
  );
}
