import React from 'react'
import { View, Text, Button } from 'react-native'

export default function OnPlanet({ navigation }) {
  return (
    <View>
      <Text>on planet</Text>
      <Button
      title="Outer Planet"
      onPress={() => navigation.navigate('OuterPlanet')}
      />
    </View>
  )
}
