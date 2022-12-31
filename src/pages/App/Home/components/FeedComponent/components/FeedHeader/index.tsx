import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const FeedHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentTitle}>
        <Text style={styles.Title}>My memories</Text>
      </View>
    </View>
  );
};

export default FeedHeader;
