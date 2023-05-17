import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Home from '../screens/App/Home';
import MemoriesPage from '../screens/App/MemoriesPage';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Memories" component={MemoriesPage} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
