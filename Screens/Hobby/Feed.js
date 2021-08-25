import React from 'react'
import { View, Text } from 'react-native'

export default function Feed({ navigation, route }) {
  console.log(route)
  const hobby = route.params.hobby;

  return (
    <View>
      <Text>{hobby}</Text>
      <Text>hobby feed</Text>
    </View>
  )
}
