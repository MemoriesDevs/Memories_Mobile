import React from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import COLORS from "./src/styles/colors";

const App = () => (
  <NavigationContainer>
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLORS.STATUS_BAR} barStyle="light-content" />
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
