/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import styles from './styles';
import profileIcon from '../../../../assets/Icons/Profile.png';
import homeIcon from '../../../../assets/Icons/Home.png';
import searchIcon from '../../../../assets/Icons/Search.png';

export default function BottomTabBar({ navigation }) {
  return (
    <View style={styles.tabContainer}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Search')}>
        <Image source={searchIcon} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
        <Image source={homeIcon} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
        <Image source={profileIcon} />
      </TouchableWithoutFeedback>
    </View>
  );
}
