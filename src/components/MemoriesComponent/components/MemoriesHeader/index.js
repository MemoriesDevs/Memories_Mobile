/* eslint-disable react/prop-types */
import { View, Text } from 'react-native';
import React from 'react';
import BasicProfileIcon from '../../../BasicProfileIcon';
import styles from './styles';

export default function MemoriesHeader({ title, date }) {
  return (
    <View style={styles.headerContainer}>
      <BasicProfileIcon big />
      <View style={styles.containerText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
}
