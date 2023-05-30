/* eslint-disable react/prop-types */
import { Text } from 'react-native';
import React from 'react';
import BasicPage from '../../../components/BasicPage';
import MemoriesComponent from '../../../components/MemoriesComponent';
import { useGetMemorieQuery } from '../../../services/servicesMemories';

export default function MemoriesPage({ route, navigation }) {
  const { title, date, id } = route.params;
  return (
    <BasicPage navigation={navigation} name="My memories">
      <MemoriesComponent date={date} title={title} />
    </BasicPage>
  );
}
