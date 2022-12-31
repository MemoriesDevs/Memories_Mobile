import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";

interface CardFeedrProps {
  date: string;
  title: string;
  onPress: () => void;
}

const CardFeed = ({ onPress, date, title }: CardFeedrProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View>
          <View style={styles.contentTop}>
            <Text style={styles.dateTitle}>{date}</Text>
          </View>
          <View style={styles.contentCenter}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.contentBottom} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardFeed;
