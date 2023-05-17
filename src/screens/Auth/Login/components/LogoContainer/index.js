import { View, Image, Text } from 'react-native';
import React from 'react';
import icon from '../../../../../assets/Icon.png';
import styles from './styles';

export default function LogoContainer() {
  return (
    <View style={styles.logoContainer}>
      <Image source={icon} style={styles.iconContent} />
      <Text style={styles.logoContent}>【ｍｅｍｏｒｉｅｓ】</Text>
    </View>
  );
}
