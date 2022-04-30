import React, {useState} from 'react';
import {Alert} from 'react-native';
import LoginView from './LoginView';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');

  const onPressLogin = async () => {
    try {
      console.log('hello there');
      await AsyncStorage.setItem(
        'token',
        '12345'
      );
    } catch (error) {
      // Error saving data
      Alert.alert(
        'Login failed',
        `${error}`,
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]
      );
    }
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
