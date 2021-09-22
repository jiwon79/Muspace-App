import React from 'react'
import { View, Text } from 'react-native'

import JourneyGalaxyHeader from '../../components/Header/JourneyGalaxyHeader'
import { JourneyGalaxyStackProp } from '../../utils/types'

type Props = {
  route: any,
  navigation: any
}

export default function JourneyGalaxy({ route, navigation }: JourneyGalaxyStackProp) {
  const genre:string = route.params.genre;

  return (
    <View>
      <JourneyGalaxyHeader navigation={navigation} genre={genre}/>
      <Text>journey galaxy page</Text>
    </View>
  )
}
