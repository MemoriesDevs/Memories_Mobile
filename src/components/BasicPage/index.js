import {
  ImageBackground, StatusBar, Text, View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../styles/colors';
import styles from './styles';
import Header from './Components/Header';
import BottomTabBar from './Components/BottomTabBar';
import HomeImage from './assets/HomeImage.jpeg';

export default function BasicPage({ navigation }) {
  return (
    <View style={styles.ContainerPage}>
      <StatusBar backgroundColor={COLORS.STATUS_BAR} barStyle="light-content" />
      <View style={styles.contentPage}>
        <Header />
        <ImageBackground style={styles.ContainerChild} resizeMode="cover" source={HomeImage} />
        <BottomTabBar />
      </View>
    </View>
  );
}
