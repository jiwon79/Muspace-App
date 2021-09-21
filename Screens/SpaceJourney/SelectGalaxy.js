import React from 'react'
import { View, Text, Button } from 'react-native'

import SelectGalaxyHeader from '../../components/Header/SelectGalaxyHeader'
import ButtonModule from '../../components/atom/ButtonModule'

export default function SelectGalaxy({ route, navigation }) {
  return (
    <View>
      <SelectGalaxyHeader/>
      <Text>select galaxy page</Text>
      <ButtonModule 
        text="갤럭시 탐색"
        onPress={() => navigation.navigate('JourneyGalaxy')}
      />
    </View>
  )
}
