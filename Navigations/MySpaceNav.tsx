import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OuterPlanet from '../Screens/MySpace/OuterPlanet';
import InPlanet from '../Screens/MySpace/InPlanet';
import CategoryFeed from '../Screens/Feed/CategoryFeed'
import WriteFeed from '../Screens/Feed/WriteFeed'

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
        name="CategoryFeed"
        component={CategoryFeed}
      />
      <Stack.Screen
        name="WriteFeed"
        component={WriteFeed}
      />
    </Stack.Navigator>
  )
}
