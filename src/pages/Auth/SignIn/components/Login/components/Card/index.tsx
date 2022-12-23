import React from "react";
import { View, Image } from "react-native";
import AuthActionButton from "../../../../../../../components/AuthActionButton";
import TextField from "../../../../../../../components/TextField";
import SignInCardHooks from "./hooks";
import styles from "./styles";

const image = require("../../../../../../../assets/Logo.png");

const Card = () => {
  const { email, setEmail, password, setPassword, handleSignIn } =
    SignInCardHooks();

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.containerCards}>
        <TextField
          placeholder="Email"
          value={email}
          secureTextEntry={false}
          onChangeText={(element: string) => setEmail(element)}
        />
        <TextField
          placeholder="Password"
          value={password}
          onChangeText={(element: string) => setPassword(element)}
          secureTextEntry={true}
        />
        <View style={styles.containerButtons}>
          <AuthActionButton title="SignIn" onPress={() => handleSignIn()} />
          <AuthActionButton
            title="SignUp"
            onPress={() => console.log("test")}
          />
        </View>
      </View>
    </View>
  );
};

export default Card;
