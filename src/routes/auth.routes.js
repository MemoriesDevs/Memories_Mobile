import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
