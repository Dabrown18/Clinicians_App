import React, {useEffect, useState} from 'react';
import { MainStack, AuthStack } from './src/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      // Error retrieving data
      setIsAuthenticated(false);
    }
  };

  return isAuthenticated ? <MainStack /> : <AuthStack />;
};

export default App;
