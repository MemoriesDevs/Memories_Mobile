import { View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import BasicPage from '../../../components/BasicPage';
import styles from './styles';
import HeaderProfile from './components/HeaderProfile';
import { useGetUserQuery } from '../../../services/servicesUser';

export default function Profile() {
  const navigation = useNavigation();
  const {
    data, isLoading, isFetching, refetch,
  } = useGetUserQuery();
  return (
    <BasicPage navigation={navigation} name="Profile">
      <View style={styles.container}>
        <HeaderProfile data={data} />
      </View>
    </BasicPage>
  );
}
