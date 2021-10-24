import React from 'react'
import { NavigationContainer, getFocusedRouteNameFromRoute, useNavigationState } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MySpaceNav from '../MySpaceNav';
import SpaceJourneyNav from '../SpaceJourneyNav';
import CustomTab from './CustumTab'

const Tab = createBottomTabNavigator();
const getTabBarVisible = ({navigation, route}) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const invisibleTabRouteList = Array('InPlanet', 'Feed', 'JourneyGalaxy');
  if (invisibleTabRouteList.includes(routeName)) {
    return { display: 'none' }
  }
}

export default function MainBottomNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="MySpace"
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
        tabBar={props => <CustomTab {...props} />}
      >
        <Tab.Screen 
          name="SpaceJourney"
          component={SpaceJourneyNav}
          options={({ navigation, route }) => ({
            tabBarStyle: getTabBarVisible({navigation, route}),
            tabBarLabel: '스페이스 저니'
          })}
        />
        <Tab.Screen 
          name="MySpace" 
          component={MySpaceNav}
          options={({ navigation, route }) => ({
            tabBarStyle: getTabBarVisible({navigation, route}),
            tabBarLabel: '마이 스페이스'
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
