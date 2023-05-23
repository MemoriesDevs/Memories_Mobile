/* eslint-disable react/prop-types */
import {
  ImageBackground, StatusBar, Text, View,
} from 'react-native';
import React from 'react';
import COLORS from '../../styles/colors';
import styles from './styles';
import Header from './Components/Header';
import BottomTabBar from './Components/BottomTabBar';
import HomeImage from './assets/HomeImage.jpeg';

export default function BasicPage({ navigation, children, name }) {
  return (
    <View style={styles.ContainerPage}>
      <StatusBar backgroundColor={COLORS.STATUS_BAR} barStyle="dark-content" />
      <View style={styles.contentPage}>
        <Header navigation={navigation} />
        <ImageBackground style={styles.ContainerChild} resizeMode="cover" source={HomeImage}>
          <Text style={styles.pageTitle}>{name}</Text>
          {
            children
          }
        </ImageBackground>
        <BottomTabBar navigation={navigation} />
      </View>
    </View>
  );
}
