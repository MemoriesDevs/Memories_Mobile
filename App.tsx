import React from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import COLORS from "./src/styles/colors";
import { Provider } from "react-redux";
import store from "./src/store";
import AuthProvider from "./src/contexts/auth";

if (__DEV__) {
  import("./ReactotronConfig");
}

const App = () => (
  <NavigationContainer>
    <Provider store={store}>
      <AuthProvider>
        <View style={{ flex: 1 }}>
          <StatusBar
            backgroundColor={COLORS.STATUS_BAR}
            barStyle="light-content"
          />
          <Routes />
        </View>
      </AuthProvider>
    </Provider>
  </NavigationContainer>
);

export default App;
