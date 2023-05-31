/* eslint-disable react/prop-types */
import {
  View, TouchableWithoutFeedback, Image, Text,
} from 'react-native';
import React from 'react';
import styles from './styles';
import CardHooks from './hooks';
import BasicProfileIcon from '../BasicProfileIcon';

export default function MemorieCard({
  navigation, id, date, title,
}) {
  const {
    handlePressMemorie,
  } = CardHooks({ date, title, navigation });
  return (
    <View style={styles.CardContainer}>
      <TouchableWithoutFeedback style={styles.ButtonCard} onPress={() => handlePressMemorie(id)}>
        <View style={styles.CardContent}>
          <View style={styles.TopContainer}>
            <View style={styles.LeftContent}>
              <Text style={styles.CardDate}>{date}</Text>
              <Text style={styles.TitleCard}>{title}</Text>
            </View>
            <View style={styles.RigthContent}>
              <BasicProfileIcon />
            </View>
          </View>
          <View style={styles.BottomContainer} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
