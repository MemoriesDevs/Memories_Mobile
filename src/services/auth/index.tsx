import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { LOGIN_URL, REGISTER_URL } from "./constants";

const register = (nickname: string, email: string, password: string) => {
  return axios
    .post(REGISTER_URL, {
      nickname,
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        AsyncStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const login = (email: string, password: string) => {
  return axios
    .post(LOGIN_URL, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        AsyncStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  AsyncStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
