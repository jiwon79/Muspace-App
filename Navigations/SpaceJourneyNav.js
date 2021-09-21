import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SelectGalaxy from '../Screens/SpaceJourney/SelectGalaxy';
import JourneyGalaxy from '../Screens/SpaceJourney/JourneyGalaxy';

const Stack = createStackNavigator();

export default function SpaceJourneyNav() {
  return (
    <Stack.Navigator 
      initialRouteName="selectGalaxy"
    >
      <Stack.Screen 
        name="selectGalaxy" 
        component={SelectGalaxy}
      />
      <Stack.Screen 
        name="JourneyGalaxy"
        component={JourneyGalaxy}
      />
    </Stack.Navigator>
  )
}
