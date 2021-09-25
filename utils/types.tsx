import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';

export type JourneyGalaxyStackNav = {
  SelectGalaxy: undefined;
  JourneyGalaxy: {
    genre: string;
  };
}

export interface JourneyGalaxyStackProp {
  route: RouteProp<JourneyGalaxyStackNav, 'JourneyGalaxy'>
  navigation: StackNavigationProp<JourneyGalaxyStackNav, 'JourneyGalaxy'>
}

export type OuterPlanetDrawerNav = {
  OuterPlanetMain: undefined;
  EditOuterPlanet: undefined;
}

export interface OuterPlanetDrawerNavProp {
  route: RouteProp<OuterPlanetDrawerNav, 'OuterPlanetMain'>
  navigation: DrawerNavigationProp<OuterPlanetDrawerNav, 'OuterPlanetMain'>
}