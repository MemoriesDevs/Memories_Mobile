/* eslint-disable react/prop-types */
import { View } from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import styles from './styles';
import FriendsList from './components/FriendsList';
import MemoriesList from './components/MemoriesList';

export default function ContentProfile({
  data,
  navigation,
  contentType,
  selectedType,
  setSelectedType,
}) {
  const handleShowContent = () => {
    switch (selectedType) {
      case 'Friends':
        return (
          <FriendsList data={data} navigation={navigation} />
        );
      default:
        return (
          <MemoriesList data={data} navigation={navigation} />
        );
    }
  };

  return (
    <View style={styles.container}>
      <SelectDropdown
        buttonStyle={styles.dropdownButton}
        buttonTextStyle={styles.dropdownText}
        data={contentType}
        onSelect={(selectedItem) => {
          setSelectedType(selectedItem);
        }}
        defaultButtonText={selectedType}
        defaultValue={selectedType}
      />
      <View style={styles.containerInfo}>
        {
          handleShowContent()
        }
      </View>
    </View>
  );
}
