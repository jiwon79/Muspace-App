import React from 'react'
import { View, Text, Button } from 'react-native'
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';

import Header from '../../components/Header/Header';
import Planet from './../../components/Planet';
import MusicThum from '../../components/MusicThum';

export default function OuterPlanet({ navigation }) {
  return (
    <View>
      <Header/>
      <Planet/>
      <MusicThum navigation={navigation}/>
      <Button
      title="in planet"
      onPress={() => navigation.navigate("InPlanet")}
      />
    </View>
  )
}
