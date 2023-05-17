/* eslint-disable react/prop-types */
import React from 'react';
import { TextInput, View } from 'react-native';
import COLORS from '../../styles/colors';
import styles from './styles';

function AuthTextField({
  placeholder, onChangeText, value, secureTextEntry,
}) {
  return (
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
}

export default AuthTextField;
