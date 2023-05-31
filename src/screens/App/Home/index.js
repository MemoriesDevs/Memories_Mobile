/* eslint-disable no-unused-vars */
import { FlatList, Text, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import BasicPage from '../../../components/BasicPage';
import styles from './styles';
import MemorieCard from '../../../components/Cards';
import { useGetUserQuery } from '../../../services/servicesUser';

export default function Home() {
  const navigation = useNavigation();
  const {
    data, isLoading, isFetching, refetch,
  } = useGetUserQuery();

  // const getUser = useCallback(async () => {
  //   await refetch();
  // }, [refetch]);

  return (
    <BasicPage navigation={navigation} name="Feed">
      {
       data
     && (
     <FlatList
       data={data.memories}
       showsVerticalScrollIndicator={false}
       renderItem={({ item }) => (
         <MemorieCard navigation={navigation} id={item.id} date={item.date} title={item.title} />
       )}
       keyExtractor={(item) => item.id}
       style={styles.ListContainer}
     />
     )
      }
    </BasicPage>
  );
}
