import {
  Image, Platform, NativeModules, View, TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from './assets/IconHeader.png';

export default function Header() {
  const { StatusBarManager } = NativeModules;

  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBarManager.HEIGHT;

  return (
    <View style={[styles.headerContainer, { marginTop: STATUSBAR_HEIGHT }]}>
      <TouchableWithoutFeedback>
        <Image style={styles.headerImage} source={Icon} />
      </TouchableWithoutFeedback>
    </View>
  );
}
