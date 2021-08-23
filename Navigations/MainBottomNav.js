import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MySpace from './../Screens/MySpace';

const Tab = createBottomTabNavigator();

export default function MainBottomNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName="MySpace"
      screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen 
        name="MySpace" 
        component={MySpace}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
