import React from 'react'
import { View, Text } from 'react-native'

import JourneyGalaxyHeader from '../../components/Header/JourneyGalaxyHeader'

export default function JourneyGalaxy({ route, navigation }) {
  return (
    <View>
      <JourneyGalaxyHeader navigation={navigation}/>
      <Text>journey galaxy page</Text>
    </View>
  )
}
