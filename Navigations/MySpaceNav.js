import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OuterPlanet from '../Screens/MySpace/OuterPlanet';
import InPlanet from '../Screens/MySpace/InPlanet';
import HobbyNav from './HobbyNav'
import OuterPlanetSideNav from './OuterPlanetSideNav';

const Stack = createStackNavigator();

export default function MySpaceNav() {
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
        option={{
          headerShown: false
        }}  
      />
      <Stack.Screen 
        name="InPlanet"
        component={InPlanet}
      />
      <Stack.Screen 
        name="HobbyFeed" 
        component={HobbyNav}
      />
    </Stack.Navigator>
  )
}
