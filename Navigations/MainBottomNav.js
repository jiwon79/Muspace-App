import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MySpaceNav from './MySpaceNav';
import OurSpace from './../Screens/OurSpace';
import SpaceJourney from './../Screens/SpaceJourney';

const Tab = createBottomTabNavigator();

const getTabBarVisible = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route)
  if (routeName == 'HobbyFeed') {
    return { display: 'none' }
  }
}

export default function MainBottomNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="MySpace"
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen 
          name="SpaceJourney" 
          component={SpaceJourney}
        />
        <Tab.Screen 
          name="MySpace" 
          component={MySpaceNav}
          options={({ route }) => ({
            tabBarStyle: getTabBarVisible(route)
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
