/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
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
          <Carousel
            width={275}
            height={200}
            data={item.content}
            scrollAnimationDuration={1000}
            renderItem={({ index }) => (
              <View
                style={{
                  justifyContent: 'center',
                }}
              >
                <Image style={styles.imageContent} source={{ uri: `${API_BASE_URL}${item.content[index]}` }} />
              </View>
            )}
          />
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
