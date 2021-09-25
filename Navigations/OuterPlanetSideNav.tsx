import React, { ReactElement } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import OuterPlanet from '../Screens/MySpace/OuterPlanet';
import EditOuterPlanet from '../Screens/Edit/EditOuterPlanet';

const Drawer = createDrawerNavigator();

export default function OuterPlanetSideNav(): ReactElement {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}  
    >
      <Drawer.Screen 
        name="OuterPlanetMain" 
        component={OuterPlanet} 
        options={{ title: 'MySpace' }}
      />
      <Drawer.Screen 
        name="EditOuterPlanet" 
        component={EditOuterPlanet} 
        options={{ title: 'Edit MySpace' }}
      />
    </Drawer.Navigator>
  )
}
