import React from 'react'
import { View, Text, Button } from 'react-native'

import Planet from '../../components/Planet';
import Hobby from '../../components/Hobby';

export default function InPlanet({ navigation }) {
  return (
    <View>
      <Text>on planet</Text>
      <Planet/>
      <Button
      title="Outer Planet"
      onPress={() => navigation.navigate('OuterPlanet')}
      />
      <Hobby hobby="취미"/>
    </View>
  )
}
