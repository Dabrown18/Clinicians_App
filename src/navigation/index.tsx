// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Clinician } from '../interfaces';

export type RootStackParamList = {
  Home: undefined;
  Detail: { clinician: Clinician };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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

export default MainStack;
