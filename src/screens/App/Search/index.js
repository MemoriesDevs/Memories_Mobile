import { View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import BasicPage from '../../../components/BasicPage';
import styles from './styles';
import HeaderSearch from './components/HeaderSearch';

export default function Search() {
  const navigation = useNavigation();
  return (
    <BasicPage navigation={navigation} name="Search">
      <View style={styles.container}>
        <HeaderSearch />
      </View>
    </BasicPage>
  );
}
