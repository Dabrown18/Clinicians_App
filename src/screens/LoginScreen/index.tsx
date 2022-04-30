import React, {useState} from 'react';
import {Alert} from 'react-native';
import LoginView from './LoginView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { authActions } from '../../redux/slices/authSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');

  const onPressLogin = async () => {
    try {
      await AsyncStorage.setItem(
        'token',
        '12345'
      );
      dispatch(authActions.authenticateUser(true));
    } catch (error) {
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
