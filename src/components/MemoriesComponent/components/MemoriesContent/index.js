/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, Image } from 'react-native';
import { API_BASE_URL } from '../../../../services/axios';
import styles from './styles';

export default function MemoriesContent({ item }) {
  const url = API_BASE_URL + item.content[0];
  switch (item.type) {
    case 'image':
      return (
        <View style={styles.Container}>
          <Image style={styles.imageContent} source={{ uri: url }} />
        </View>
      );
    case 'carousel':
      return (
        <View style={styles.Container}>
          <Image source={{ uri: url }} />
        </View>
      );
    default:
      return (
        <View style={styles.Container}>
          <Text style={styles.textContent}>{item.content[0]}</Text>
        </View>
      );
  }
}
