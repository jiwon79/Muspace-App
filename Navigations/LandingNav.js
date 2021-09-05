import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './../Screens/auth/Landing';
import RegisterScreen from './../Screens/auth/Register';
import LoginScreen from './../Screens/auth/Login';

const Stack = createStackNavigator();

export default function LandingNav({ handleLogged }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen 
          name="Landing" 
          component={LandingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          initialParams={{handleLogged}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
