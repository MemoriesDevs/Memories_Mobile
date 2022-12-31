import { useContext, useState } from "react";
import { Alert } from "react-native";

const FeedComponentHooks = (navigation) => {
  const handlePress = (page, item) => {
    navigation.navigate(page, item);
  };

  const handleCreate = (page) => {
    navigation.navigate(page);
  };

  return {
    handlePress,
    handleCreate,
  };
};

export default FeedComponentHooks;
