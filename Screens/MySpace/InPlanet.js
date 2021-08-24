import React from 'react'
import { View, Text, Button } from 'react-native'

import Planet from '../../components/Planet';

export default function InPlanet({ navigation }) {
  return (
    <View>
      <Text>on planet</Text>
      <Planet/>
      <Button
      title="Outer Planet"
      onPress={() => navigation.navigate('OuterPlanet')}
      />
    </View>
  )
}
