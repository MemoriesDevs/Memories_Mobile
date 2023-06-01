/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';
import { API_BASE_URL } from '../../../../../services/axios';
import Icon from '../../assets/GearIcon.png';
import styles from './styles';

export default function HeaderProfile({ data }) {
  const url = API_BASE_URL + data.photo;
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Image style={styles.profileImage} source={{ uri: url }} />
        <View style={styles.containerData}>
          <View style={styles.contentHeader}>
            <Text style={styles.profileName}>{data.nickname}</Text>
            <TouchableOpacity>
              <Image source={Icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.containerNumbers}>
            <View style={styles.contentNumbers}>
              <Text style={styles.contentName}>
                Memories
              </Text>
              <Text style={styles.number}>
                {data.memories.length}
              </Text>
            </View>
            <View style={styles.contentNumbers}>
              <Text style={styles.contentName}>
                Friends
              </Text>
              <Text style={styles.number}>
                {data.friends.length}
              </Text>
            </View>
            <View style={styles.contentNumbers}>
              <Text style={styles.contentName}>
                Circles
              </Text>
              <Text style={styles.number}>
                10
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerBio}>
        <Text style={styles.bio}>{data.bio}</Text>
      </View>
    </View>
  );
}
