import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';
import AppNavigator from './app.routes';
import AuthNavigator from './auth.routes';

function AppRoute() {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      {
        userInfo ? <AppNavigator /> : <AuthNavigator />
      }
    </NavigationContainer>
  );
}

export default AppRoute;
