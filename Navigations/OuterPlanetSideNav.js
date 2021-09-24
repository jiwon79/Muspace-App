import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import OuterPlanet from '../Screens/MySpace/OuterPlanet';
import EditOuterPlanet from '../Screens/Edit/EditOuterPlanet';

const Drawer = createDrawerNavigator();

export default function OuterPlanetSideNav() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="OuterPlanetMain" component={OuterPlanet} />
      <Drawer.Screen name="EditOuterPlanet" component={EditOuterPlanet} />
    </Drawer.Navigator>
  )
}
