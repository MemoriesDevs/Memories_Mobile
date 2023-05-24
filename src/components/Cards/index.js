/* eslint-disable react/prop-types */
import {
  View, TouchableWithoutFeedback, Image, Text,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from './assets/ProfileIcon.png';

export default function MemorieCard({ navigation, date, title }) {
  return (
    <View style={styles.CardContainer}>
      <TouchableWithoutFeedback style={styles.ButtonCard}>
        <View style={styles.CardContent}>
          <View style={styles.TopContainer}>
            <View style={styles.LeftContent}>
              <Text style={styles.CardDate}>{date}</Text>
              <Text style={styles.TitleCard}>{title}</Text>
            </View>
            <View style={styles.RigthContent}>
              <View style={styles.ProfileBG}>
                <Image source={Icon} />
              </View>
            </View>
          </View>
          <View style={styles.BottomContainer} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
