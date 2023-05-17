import { View, ImageBackground, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import imageBG from './assets/RegisterBG.jpeg';
import iconButton from './assets/Chevron-Left.png';
import styles from './styles';
import Card from './components/Card';

export default function Register() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={imageBG} resizeMode="cover" style={styles.content}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image source={iconButton} />
          </TouchableOpacity>
        </View>
        <Card />
      </ImageBackground>
    </View>
  );
}
