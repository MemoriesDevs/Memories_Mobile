/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  FlatList,
  Image, Text, TouchableWithoutFeedback, View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfileIcon from '../../../../../assets/Icons/ProfileIconFriend.png';
import Add from '../../assets/Add.png';
import Confirm from '../../assets/Confirm.png';
import styles from './styles';

export default function ContentSearch() {
  const data = [
    {
      id: 1,
      nickname: 'Glauquito',
      status: 'pending',
    },
    {
      id: 2,
      nickname: 'GASP',
      status: 'pending',
    },
    {
      id: 3,
      nickname: 'Dennielzin',
      status: 'accept',
    },
    {
      id: 4,
      nickname: 'Guizão',
      status: 'accept',
    },
  ];
  function ProfileItem({ item }) {
    return (
      <View style={styles.conatinerItem}>
        <View style={styles.contentButton}>
          <View style={styles.profileBG}>
            <Image style={styles.imageProfile} source={ProfileIcon} />
          </View>
          <View style={styles.textContainer}>
            <Text>{item.nickname}</Text>
            <TouchableOpacity style={styles.buttonContainer}>
              <Image source={Confirm} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recents</Text>
      <FlatList
        data={data}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        renderItem={({ item }) => (
          <ProfileItem item={item} />
        )}
        keyExtractor={(item) => item.id}
        style={styles.ListContainer}
      />
    </View>
  );
}
