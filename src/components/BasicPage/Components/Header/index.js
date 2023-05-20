import {
  View, Text, Image, StatusBar, Platform, NativeModules,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Icon from './assets/IconHeader.png';

export default function Header() {
  const { StatusBarManager } = NativeModules;

  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBarManager.HEIGHT;

  return (
    <LinearGradient useAngle angle={86.9} style={[styles.headerContainer, { paddingTop: STATUSBAR_HEIGHT }]} angleCenter={{ x: 0.7, y: 0.4 }} colors={['#AF57FB', '#0FD0FF']}>
      <Image style={styles.headerImage} source={Icon} />
    </LinearGradient>
  );
}
