/* eslint-disable react/prop-types */
import React from 'react';
import { View, Image } from 'react-native';
import Icon from './assets/ProfileIcon.png';
import styles from './styles';

export default function BasicProfileIcon({ big }) {
  return (
    <View style={big
      ? [styles.ProfileBG, styles.big]
      : [styles.ProfileBG, styles.normal]}
    >
      <Image source={Icon} style={big && styles.bigImage} />
    </View>
  );
}
