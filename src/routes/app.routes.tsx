import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Auth/SignIn";

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
