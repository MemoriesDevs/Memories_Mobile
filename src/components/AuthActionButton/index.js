/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

function AuthActionButton({ onPress, title }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.Title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AuthActionButton;
