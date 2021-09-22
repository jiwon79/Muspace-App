import React from 'react'
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MySpaceNav from './MySpaceNav';
import SpaceJourneyNav from './SpaceJourneyNav';
import OurSpace from './../Screens/OurSpace';

const Tab = createBottomTabNavigator();
const getTabBarVisible = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName == 'HobbyFeed' || routeName == 'JourneyGalaxy') {
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
          component={SpaceJourneyNav}
          options={({ route }) => ({
            tabBarStyle: getTabBarVisible(route)
          })}
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
