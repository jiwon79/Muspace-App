import React from 'react'
import { View, Text } from 'react-native'

import HobbyFeedHeader from '../../components/Header/HobbyFeedHeader';

export default function Feed({ navigation, route }) {
  console.log(route)
  const hobby = route.params.hobby;

  return (
    <View>
      <HobbyFeedHeader 
        hobby={hobby}
        navigation={navigation}
      />
      <Text>{hobby}</Text>
      <Text>hobby feed</Text>
    </View>
  )
}
