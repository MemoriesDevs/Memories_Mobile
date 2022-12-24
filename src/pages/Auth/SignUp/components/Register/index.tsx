import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, ImageBackground, SafeAreaView } from "react-native";
import Header from "../../../../../components/Header";
import CardSignUp from "./CardSignUp";
import styles from "./styles";

const image = require("../../../../../assets/SignUp.png");

const Register = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.content} source={image} resizeMode="cover">
        <SafeAreaView>
          <Header backButton={true} onPress={() => navigation.goBack()} />
          <CardSignUp />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Register;
