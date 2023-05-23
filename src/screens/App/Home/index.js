import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import BasicPage from '../../../components/BasicPage';

export default function Home() {
  const navigation = useNavigation();
  return (
    <BasicPage navigation={navigation} name="Feed">
      <Text>
        Salve
      </Text>
    </BasicPage>
  );
}
