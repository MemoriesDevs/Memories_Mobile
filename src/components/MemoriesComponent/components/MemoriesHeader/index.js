/* eslint-disable react/prop-types */
import { View, Text, Image } from 'react-native';
import React from 'react';

export default function MemoriesHeader({ title, date }) {
  return (
    <View>
      <Image />
      <View>
        <Text>{title}</Text>
        <Text>{date}</Text>
      </View>
    </View>
  );
}
