import React from 'react'
import { View, Text, Button } from 'react-native'

import HobbyFeedHeader from '../../components/Header/HobbyFeedHeader';

export default function HobbyFeed({ navigation: { goBack }, route }) {
  console.log(route)
  const hobby = route.params.hobby;

  return (
    <View>
      <HobbyFeedHeader goBack={() => goBack()}/>
      <Button 
        title="go back"
        onPress={()=>goBack()}
        />
      <Text>{hobby} Feed</Text>
    </View>
  )
}
