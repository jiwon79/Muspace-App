import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../Screens/Hobby/Feed';
import FeedWrite from '../Screens/Hobby/FeedWrite';

const Stack = createStackNavigator();

export default function MySpaceNav({ navigatoin, route }) {
  console.log(route);
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
        initialParams={{ hobby: route.params.hobby }}
      />
      <Stack.Screen 
        name="FeedWrite"
        component={FeedWrite}
        initialParams={{ hobby: route.params.hobby }}
      />
    </Stack.Navigator>
  )
}
