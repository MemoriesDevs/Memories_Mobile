import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const AuthActionButton = ({ title, onPress }: ButtonProps) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.Title}>{title}</Text>
  </TouchableOpacity>
);

export default AuthActionButton;
