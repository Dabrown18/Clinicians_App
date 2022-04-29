// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import LoginScreen from '../screens/LoginScreen';
import { Clinician } from '../interfaces';

export type StackParamList = {
  Login: undefined
  Home: undefined;
  Detail: { clinician: Clinician };
};

const Stack = createNativeStackNavigator<StackParamList>();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Clinicians' }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'Clinician Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export { MainStack, AuthStack };
