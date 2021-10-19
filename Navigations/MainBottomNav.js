import React from 'react'
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MySpaceNav from './MySpaceNav';
import SpaceJourneyNav from './SpaceJourneyNav';
import MainBottomCustumTab from './MainBottomCustumTab'

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
        tabBar={props => <MainBottomCustumTab {...props} />}
        screenOptions={({ route }) => ({
          headerShown: false,
        })
      }
      >
        <Tab.Screen 
          name="SpaceJourney"
          component={SpaceJourneyNav}
          options={({ route }) => ({
            tabBarStyle: getTabBarVisible(route),
            tabBarLabel: '스페이스 저니'
          })}
        />
        <Tab.Screen 
          name="MySpace" 
          component={MySpaceNav}
          options={({ route }) => ({
            tabBarStyle: getTabBarVisible(route),
            tabBarLabel: '마이 스페이스'
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
