/* eslint-disable react/prop-types */
import {
  Text, View, FlatList, TouchableOpacity, Image,
} from 'react-native';
import React from 'react';
import MemoriesHeader from './components/MemoriesHeader';
import ProfileIcon from './assets/ProfileIcon.png';
import styles from './styles';
import MemoriesContent from './components/MemoriesContent';

export default function MemoriesComponent({ date, title, data }) {
  return (
    <View style={styles.memorieContainer}>
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeSymbol}>X</Text>
      </TouchableOpacity>
      <FlatList
        data={data.itens}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MemoriesContent item={item} />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<MemoriesHeader date={date} title={title} />}
      />
      <View>
        <View style={styles.containerIcon}>
          <Image source={ProfileIcon} />
        </View>
      </View>
    </View>
  );
}
