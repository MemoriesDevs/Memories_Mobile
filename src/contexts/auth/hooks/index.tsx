import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Users } from "../../../types/users";
import reactotron from "reactotron-react-native";
import authService from "../../../services/auth";

const AuthContextHooks = () => {
  const [user, setUser] = useState<Users | undefined>();
  const signUp = async (
    email: string,
    password: string,
    passwordConfirmation: string,
    nickName: string
  ) => {
    reactotron.log!(email, password, passwordConfirmation, nickName);
  };

  const signIn = async (email: string, password: string) => {
    const userData = await authService.login(email, password);
    setUser(userData);
    storageUser(user);
  };

  const storageUser = async (data: object | undefined) => {
    await AsyncStorage.setItem("Auth_user", JSON.stringify(data));
  };

  return { user, setUser, signUp, signIn };
};

export default AuthContextHooks;
