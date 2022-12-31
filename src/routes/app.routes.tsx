import React from "react";
import {
  createStackNavigator,
  StackNavigationEventMap,
  StackNavigationOptions,
} from "@react-navigation/stack";
import Home from "../pages/App/Home";
import Memorie from "../pages/App/Memorie";
import { RouteConfig, StackNavigationState } from "@react-navigation/native";

type AppRootStackParamList = {
  Home: undefined;
  Memorie: undefined;
};

type appStackRoutesType = RouteConfig<
  AppRootStackParamList,
  keyof AppRootStackParamList,
  StackNavigationState<AppRootStackParamList>,
  StackNavigationOptions,
  StackNavigationEventMap
>;

const appStackRoutes: Array<appStackRoutesType> = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "Memorie",
    component: Memorie,
  },
];

const AppStack = createStackNavigator<AppRootStackParamList>();

const AppRoutes = () => (
  <AppStack.Navigator>
    {appStackRoutes.map((stackRoute) => (
      <AppStack.Screen
        key={stackRoute.name}
        {...stackRoute}
        options={{ headerShown: false }}
      />
    ))}
  </AppStack.Navigator>
);

export default AppRoutes;
