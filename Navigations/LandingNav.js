import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './../Screens/auth/Landing';
import RegisterScreen from './../Screens/auth/Register';
import LoginScreen from './../Screens/auth/Login';
import FindIdScreen from '../Screens/auth/FindId';
import FindPwScreen from '../Screens/auth/FindPw';

const Stack = createStackNavigator();

export default function LandingNav() {
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
          options={{ title: '회원가입' }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
        />
        <Stack.Screen 
          name="FindId" 
          component={FindIdScreen}
          options={{ title: '아이디 찾기' }}
        />
        <Stack.Screen 
          name="FindPw" 
          component={FindPwScreen}
          options={{ title: '비밀번호 찾기' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
