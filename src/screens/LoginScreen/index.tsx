import React, {useState} from 'react';
import LoginView from './LoginView';

const LoginScreen = () => {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');

  const onPressLogin = () => {

  };

  return (
    <LoginView
      onChangeUsername={onChangeUsername}
      onChangePassword={onChangePassword}
      onPressLogin={onPressLogin}
    />
  );
};

export default LoginScreen;
