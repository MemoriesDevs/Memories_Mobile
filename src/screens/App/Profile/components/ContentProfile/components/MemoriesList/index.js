/* eslint-disable react/prop-types */
import React from 'react';
import { FlatList } from 'react-native';
import MemorieCard from '../../../../../../../components/Cards';
import styles from './styles';

export default function MemoriesList({ data, navigation }) {
  return (
    <FlatList
      data={data.memories}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <MemorieCard navigation={navigation} id={item.id} date={item.date} title={item.title} />
      )}
      keyExtractor={(item) => item.id}
      style={styles.ListContainer}
    />
  );
}
