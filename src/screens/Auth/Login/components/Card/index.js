import { Image, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import mark from '../../../../../assets/WaterMark.png';
import AuthTextField from '../../../../../components/AuthTextField';
import AuthActionButton from '../../../../../components/AuthActionButton';
import SignInCardHooks from './hooks';

export default function Card() {
  const navigation = useNavigation();
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSignIn,
  } = SignInCardHooks();
  return (
    <View style={styles.cardContainer}>
      <AuthTextField
        placeholder="Email"
        value={email}
        onChangeText={(element) => setEmail(element)}
      />
      <AuthTextField
        placeholder="Password"
        value={password}
        onChangeText={(element) => setPassword(element)}
        secureTextEntry
      />
      <View style={styles.buttonsContainer}>
        <AuthActionButton title="SignIn" onPress={() => handleSignIn()} />
        <AuthActionButton title="SignUp" onPress={() => navigation.navigate('Register')} />
      </View>
      <Image style={styles.mark} source={mark} />
    </View>
  );
}
