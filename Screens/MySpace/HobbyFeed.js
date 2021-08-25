import React from 'react'
import { View, Text, Button } from 'react-native'

export default function HobbyFeed({ navigation: { goBack }, route }) {
  console.log(route)
  const hobby = route.params.hobby;

  return (
    <View>
      <Button 
        title="go back"
        onPress={()=>goBack()}
        />
      <Text>{hobby} Feed</Text>
    </View>
  )
}
