import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import Feed from "./components/FeedComponent";

type RootStackParamList = {
  Home: undefined;
  Memorie: { data: Array<string> };
};

const Home = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "Home">>();
  return <Feed navigation={navigation} />;
};

export default Home;
