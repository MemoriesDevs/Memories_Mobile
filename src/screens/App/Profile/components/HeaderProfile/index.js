/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';
import { API_BASE_URL } from '../../../../../services/axios';
import Icon from '../../assets/GearIcon.png';

export default function HeaderProfile({ data }) {
  const url = API_BASE_URL + data.photo;
  return (
    <View>
      <View>
        <Image source={{ uri: url }} />
        <View>
          <View>
            <Text>RhuanM.R</Text>
            <TouchableOpacity>
              <Image source={Icon} />
            </TouchableOpacity>
          </View>
          <View>
            <View>
              <Text>
                Memories
              </Text>
              <Text>
                30
              </Text>
            </View>
            <View>
              <Text>
                Friends
              </Text>
              <Text>
                50
              </Text>
            </View>
            <View>
              <Text>
                Circles
              </Text>
              <Text>
                10
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text>{data.bio}</Text>
      </View>
    </View>
  );
}
