import { View, ImageBackground } from 'react-native';
import React from 'react';
import imageBG from './assets/LoginBG.jpeg';
import styles from './styles';
import LogoContainer from './components/LogoContainer';
import Card from './components/Card';

export default function Login() {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageBG} resizeMode="cover" style={styles.content}>
        <LogoContainer />
        <Card />
      </ImageBackground>
    </View>
  );
}
