import React from "react";
import { View } from "react-native";
import styles from "./styles";

interface CardPageProps {
  children: JSX.Element;
}

const CardPage = ({ children }: CardPageProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default CardPage;
