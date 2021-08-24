import React from 'react'
import { View, Text, Button } from 'react-native'

export default function OuterPlanet({ navigation }) {
  return (
    <View>
      <Text>planet outer</Text>
      <Button
      title="in planet"
      onPress={() => navigation.navigate("OnPlanet")}
      />
    </View>
  )
}
