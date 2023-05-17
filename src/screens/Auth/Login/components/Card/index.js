import { Image, View } from 'react-native';
import React from 'react';
import styles from './styles';
import mark from '../../../../../assets/WaterMark.png';
import AuthTextField from '../../../../../components/AuthTextField';
import AuthActionButton from '../../../../../components/AuthActionButton';

export default function Card() {
  return (
    <View style={styles.cardContainer}>
      <AuthTextField
        placeholder="Email"
      />
      <AuthTextField
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.buttonsContainer}>
        <AuthActionButton title="SignIn" />
        <AuthActionButton title="SignUp" />
      </View>
      <Image style={styles.mark} source={mark} />
    </View>
  );
}
