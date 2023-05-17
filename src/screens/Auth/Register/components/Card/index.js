import { Image, Text, View } from 'react-native';
import React from 'react';
import styles from './styles';
import icon from '../../../../../assets/Icon.png';
import mark from '../../../../../assets/WaterMark.png';
import AuthTextField from '../../../../../components/AuthTextField';
import AuthActionButton from '../../../../../components/AuthActionButton';
import SignInCardHooks from './hooks';

export default function Card() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSignUp,
    nickname,
    passwordConfirmed,
    setNickname,
    setPasswordConfirmed,
  } = SignInCardHooks();
  return (
    <View style={styles.cardContainer}>
      <View style={styles.logoContainer}>
        <Image source={icon} style={styles.iconContent} />
        <Text style={styles.logoContent}>【ｍｅｍｏｒｉｅｓ】</Text>
      </View>
      <AuthTextField
        placeholder="Email"
        value={email}
        onChangeText={(element) => setEmail(element)}
      />
      <AuthTextField
        placeholder="Nickname"
        value={nickname}
        onChangeText={(element) => setNickname(element)}
      />
      <AuthTextField
        placeholder="Password"
        value={password}
        onChangeText={(element) => setPassword(element)}
        secureTextEntry
      />
      <AuthTextField
        placeholder="Confirme Password"
        value={passwordConfirmed}
        onChangeText={(element) => setPasswordConfirmed(element)}
        secureTextEntry
      />
      <View style={styles.buttonsContainer}>
        <AuthActionButton title="SignUp" onPress={() => handleSignUp()} />
      </View>
      <Image style={styles.mark} source={mark} />
    </View>
  );
}
