import React from 'react'
import { View, Text, Button } from 'react-native'

import HobbyFeedHeader from '../../components/Header/HobbyFeedHeader';

export default function HobbyFeed({ navigation, route }) {
  const hobby = route.params.hobby;

  return (
    <View>
      <HobbyFeedHeader 
        hobby={hobby}
        navigation={navigation}
      />
      <Text>Feed</Text>
    </View>
  )
}
