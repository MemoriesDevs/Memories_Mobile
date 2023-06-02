/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, Text, FlatList, Image,
} from 'react-native';
import styles from './styles';
import Icon from '../../../../../../../assets/Icons/ProfileIconFriend.png';

export default function FriendsList({ data, navigation }) {
  return (
    <FlatList
      data={data.friends}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{ justifyContent: 'space-around' }}
      numColumns={3}
      renderItem={({ item }) => (
        <View>
          <View style={styles.ProfileView}>
            <Image source={Icon} />
          </View>
          <Text>{item.nickname}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      style={styles.ListContainer}
    />
  );
}
