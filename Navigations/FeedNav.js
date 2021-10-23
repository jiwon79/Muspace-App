import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../Screens/Feed/Feed';
import FeedWrite from '../Screens/Feed/FeedWrite';

const Stack = createStackNavigator();

export default function FeedNav({ navigation, route }) {
  return (
    <Stack.Navigator 
    initialRouteName="Feed"
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen 
        name="Feed" 
        component={Feed}
        option={{
          headerShown: false
        }}
        initialParams={
          { category: route.params.category }
        }
      />
      <Stack.Screen 
        name="FeedWrite"
        component={FeedWrite}
        initialParams={{ category: route.params.category }}
      />
    </Stack.Navigator>
  )
}
