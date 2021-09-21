import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SelectGalaxy from '../Screens/SpaceJourney/SelectGalaxy';
import JourneyGalaxy from '../Screens/SpaceJourney/JourneyGalaxy';

const Stack = createStackNavigator();

export default function SpaceJourneyNav({ navagation, route }) {
  return (
    <Stack.Navigator 
      initialRouteName="selectGalaxy"
      screenOptions={{
        headerShown: false,
        animationEnabled: false
      }}
    >
      <Stack.Screen 
        name="selectGalaxy" 
        component={SelectGalaxy}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="JourneyGalaxy"
        component={JourneyGalaxy}
      />
    </Stack.Navigator>
  )
}
