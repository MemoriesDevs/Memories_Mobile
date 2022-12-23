import React from "react";
import { TextInput, View } from "react-native";
import COLORS from "../../styles/colors";
import styles from "./styles";

interface FieldProps {
  placeholder: string;
  value: string;
  secureTextEntry: boolean;
  onChangeText: (a: string) => void;
}

const TextField = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
}: FieldProps) => (
  <View style={styles.container}>
    <TextInput
      style={styles.TextField}
      placeholderTextColor={COLORS.TEXT}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

export default TextField;
