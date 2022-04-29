import React from 'react';
import { TextInput, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Logo = require('../../icons/medical.png');

interface Props {
  onChangeUsername: (username: string) => void
  onChangePassword: (password: string) => void
  onPressLogin: () => void
}

const LoginView: React.FC<Props> = ({
  onChangeUsername,
  onChangePassword,
  onPressLogin,
}) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Image source={Logo} style={styles.logo} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        placeholder="Username"
      />
      <TextInput
        secureTextEntry
        style={styles.input}
        onChangeText={onChangePassword}
        placeholder="Password"
      />
      <TouchableOpacity style={styles.button} onPress={onPressLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginView;
