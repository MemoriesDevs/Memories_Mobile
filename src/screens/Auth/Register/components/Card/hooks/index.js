import { useState } from 'react';

const SignInCardHooks = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmed, setPasswordConfirmed] = useState('');

  const handleSignUp = () => {
    console.log({
      email, password, nickname, passwordConfirmed,
    });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSignUp,
    nickname,
    passwordConfirmed,
    setNickname,
    setPasswordConfirmed,
  };
};

export default SignInCardHooks;
