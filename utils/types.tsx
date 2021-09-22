import { StackNavigationProp } from '@react-navigation/stack';
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
// interface Props {
//   navigation: StackNavigationProp<StackParamList, 'JourneyGalaxy'>
// }