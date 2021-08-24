import React from 'react'
import { View, Text, Button } from 'react-native'

import Planet from './../../components/Planet';

export default function OuterPlanet({ navigation }) {
  return (
    <View>
      <Text>planet outer</Text>
      <Planet/>
      <Button
      title="in planet"
      onPress={() => navigation.navigate("OnPlanet")}
      />
    </View>
  )
}
