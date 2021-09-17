import React from 'react'
import { View, Text, Button } from 'react-native'
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';

import Header from '../../components/Header/Header';
import Planet from './../../components/Planet';
import MusicThum from '../../components/MusicThum';
import Introduce from '../../components/Introduce';
import MusicDesc from '../../components/MusicDesc';

export default function OuterPlanet({ navigation }) {
  return (
    <View>
      <Header/>
      <Introduce/>
      <Planet/>
      <MusicThum navigation={navigation}/>
      <MusicDesc/>
    </View>
  )
}
