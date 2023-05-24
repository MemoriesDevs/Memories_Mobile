import { FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import BasicPage from '../../../components/BasicPage';
import styles from './styles';
import MemorieCard from '../../../components/Cards';

export default function Home() {
  const navigation = useNavigation();
  const Data = [
    {
      id: '1',
      date: '24/02/2022',
      title: 'A day to remember',
    },
    {
      id: '2',
      date: '24/02/2022',
      title: 'A day to remember',
    },
    {
      id: '3',
      date: '24/02/2022',
      title: 'A day to remember',
    },
    {
      id: '4',
      date: '24/02/2022',
      title: 'A day to remember',
    },
    {
      id: '5',
      date: '24/02/2022',
      title: 'A day to remember',
    },
  ];
  return (
    <BasicPage navigation={navigation} name="Feed">
      <FlatList
        data={Data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (<MemorieCard date={item.date} title={item.title} />)}
        keyExtractor={(item) => item.id}
        style={styles.ListContainer}
      />
    </BasicPage>
  );
}
