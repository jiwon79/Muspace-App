import React from 'react'
import { View, Text } from 'react-native'

import HobbyContentWriteHeader from '../../components/Header/HobbyContentWriteHeader';

export default function FeedWrite({ navigation, route }) {
  const hobby = route.params.hobby;

  return (
    <View>
      <HobbyContentWriteHeader
        navigation={navigation}
        hobby={hobby}
      />
      <Text>{hobby}</Text>
      <Text>feed write</Text>
    </View>
  )
}
