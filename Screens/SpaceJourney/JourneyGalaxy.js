import React from 'react'
import { View, Text } from 'react-native'

import JourneyGalaxyHeader from '../../components/Header/JourneyGalaxyHeader'

export default function JourneyGalaxy({ route, navigation }) {
  const genre = route.params.genre;
  console.log(genre);
  return (
    <View>
      <JourneyGalaxyHeader navigation={navigation} genre={genre}/>
      <Text>journey galaxy page</Text>
    </View>
  )
}
