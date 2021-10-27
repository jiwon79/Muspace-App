import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OuterPlanet from '../Screens/MySpace/OuterPlanet';
import InPlanet from '../Screens/MySpace/InPlanet';
import Feed from '../Screens/Feed/Feed'
import FeedWrite from '../Screens/Feed/FeedWrite'

const Stack = createStackNavigator();

export default function MySpaceNav():ReactElement {
  return (
    <Stack.Navigator 
    initialRouteName="OuterPlanet"
    screenOptions={{
      headerShown: false,
      animationEnabled: false
    }}
    >
      <Stack.Screen 
        name="OuterPlanet" 
        component={OuterPlanet}
        options={{
          headerShown: false
        }}  
      />
      <Stack.Screen 
        name="InPlanet"
        component={InPlanet}
      />
      <Stack.Screen 
        name="Feed"
        component={Feed}
      />
      <Stack.Screen
        name="FeedWrite"
        component={FeedWrite}
      />
    </Stack.Navigator>
  )
}
