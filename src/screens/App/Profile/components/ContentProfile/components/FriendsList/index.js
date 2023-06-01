/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';

export default function FriendsList({ data, navigation }) {
  return (
    <FlatList
      data={data.friends}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Text>{item.id}</Text>
      )}
      keyExtractor={(item) => item.id}
      style={styles.ListContainer}
    />
  );
}
