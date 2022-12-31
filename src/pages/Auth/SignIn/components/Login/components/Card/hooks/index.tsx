import { useState } from "react";

interface SignInHooksProps {
  signIn: (email: string, password: string) => void;
}

const SignInCardHooks = ({ signIn }: SignInHooksProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signIn(email, password);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSignIn,
  };
};

export default SignInCardHooks;
