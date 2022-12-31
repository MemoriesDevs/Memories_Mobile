import React from "react";
import { View, ImageBackground } from "react-native";
import Header from "../Header";
import CardPage from "./components/AppCardComponent";
import styles from "./styles";

const image = require("../../assets/App.jpg");

interface PageProps {
  children: JSX.Element;
  backButton?: boolean | undefined;
  onPress?: () => void | undefined;
}

const PageComponent = ({ children, backButton, onPress }: PageProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.content} source={image} resizeMode="cover">
        <View style={styles.ContainerCard}>
          <Header backButton={backButton} onPress={onPress} />
          <CardPage>{children}</CardPage>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PageComponent;
