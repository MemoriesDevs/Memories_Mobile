import { useState } from 'react';

const SignInCardHooks = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log({ email, password });
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
