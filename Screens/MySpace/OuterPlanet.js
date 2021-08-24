import React from 'react'
import { View, Text, Button } from 'react-native'

import Planet from './../../components/Planet';
import MusicThum from '../../components/MusicThum';

export default function OuterPlanet({ navigation }) {
  return (
    <View>
      <Text>planet outer</Text>
      <Planet/>
      <MusicThum navigation={navigation}/>
      <Button
      title="in planet"
      onPress={() => navigation.navigate("InPlanet")}
      />
    </View>
  )
}
