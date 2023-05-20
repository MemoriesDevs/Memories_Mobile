/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/App/Home';
import MemoriesPage from '../screens/App/MemoriesPage';
import Profile from '../screens/App/Profile';
import Search from '../screens/App/Search';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Memories"
        component={MemoriesPage}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        name="Search"
        component={Search}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
