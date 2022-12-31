import React from "react";
import { ImageBackground, View } from "react-native";
import Card from "./components/Card";
import styles from "./styles";

const image = require("../../../../../assets/SignIn.png");

const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.content} source={image} resizeMode="cover">
        <Card />
      </ImageBackground>
    </View>
  );
};

export default Login;
