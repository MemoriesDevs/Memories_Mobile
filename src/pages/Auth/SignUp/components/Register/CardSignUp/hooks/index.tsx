import { useState } from "react";
import { Alert } from "react-native";

interface SignUpFormHookProps {
  signUp: (email: string, password: string, nickName: string) => void;
}

const SignUpFormHook = ({ signUp }: SignUpFormHookProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [nick, setNick] = useState("");

  const handleSignUp = () => {
    if (password === confirmedPassword) {
      setPassword(password);
      signUp(email, password, nick);
    } else {
      Alert.alert("The passwords doesn`t match");
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmedPassword,
    setConfirmedPassword,
    nick,
    setNick,
    handleSignUp,
  };
};

export default SignUpFormHook;
