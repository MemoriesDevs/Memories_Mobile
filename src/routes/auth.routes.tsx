import React from "react";
import {
  createStackNavigator,
  StackNavigationEventMap,
  StackNavigationOptions,
} from "@react-navigation/stack";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import { RouteConfig, StackNavigationState } from "@react-navigation/native";

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

type AppStackRoutesType = RouteConfig<
  RootStackParamList,
  keyof RootStackParamList,
  StackNavigationState<RootStackParamList>,
  StackNavigationOptions,
  StackNavigationEventMap
>;

const appStackRoutes: Array<AppStackRoutesType> = [
  {
    name: "SignIn",
    component: SignIn,
  },
  {
    name: "SignUp",
    component: SignUp,
  },
];

const AuthStack = createStackNavigator<RootStackParamList>();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    {appStackRoutes.map((stackRoute) => (
      <AuthStack.Screen
        key={stackRoute.name}
        {...stackRoute}
        options={{ headerShown: false }}
      />
    ))}
  </AuthStack.Navigator>
);

export default AuthRoutes;