import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';

export type MainBottomTabNav = {
  MySpace: undefined;
  SpaceJourney: undefined;
}

export interface MainBottomTabMySpaceProp {
  route: RouteProp<MainBottomTabNav, 'MySpace'>
  navigation: BottomTabNavigationProp<MainBottomTabNav, 'MySpace'>
}

export interface MainBottomTabSpaceJourneyProp {
  route: RouteProp<MainBottomTabNav, 'SpaceJourney'>
  navigation: BottomTabNavigationProp<MainBottomTabNav, 'SpaceJourney'>
}


export type MySpaceStackNav = {
  InPlanet: undefined;
  OuterPlanet: undefined;
  Feed: undefined;
}

export interface MySpaceInPlanetProp {
  route: RouteProp<MySpaceStackNav, 'InPlanet'>
  navigation: StackNavigationProp<MySpaceStackNav, 'InPlanet'>
}

export interface MySpaceOuterPlanetProp {
  route: RouteProp<MySpaceStackNav, 'OuterPlanet'>
  navigation: StackNavigationProp<MySpaceStackNav, 'OuterPlanet'>
}


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