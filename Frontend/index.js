import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoadingScreen } from 'App.js';
import { HomeScreen } from 'Home.js';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="loadingScreen"
          component={LoadingScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
          name="homeScreen" 
          component={HomeScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};