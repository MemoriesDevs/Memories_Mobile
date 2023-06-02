import React from 'react';
import {
  View, TextInput, Image, TouchableOpacity,
} from 'react-native';
import Icon from '../../assets/CancelIcon.png';
import styles from './styles';

export default function HeaderSearch() {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Search"
          style={styles.input}
        />
        <TouchableOpacity>
          <Image source={Icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
