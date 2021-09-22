import React, { ReactElement } from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import SelectGalaxy from '../Screens/SpaceJourney/SelectGalaxy';
import JourneyGalaxy from '../Screens/SpaceJourney/JourneyGalaxy';

const Stack = createStackNavigator();

export default function SpaceJourneyNav(): ReactElement {
  return (
    <Stack.Navigator 
      initialRouteName="SelectGalaxy"
      screenOptions={{
        headerShown: false,
        animationEnabled: false
      }}
    >
      <Stack.Screen 
        name="SelectGalaxy" 
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
