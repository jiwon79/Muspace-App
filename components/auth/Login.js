import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Login({ route, navigation }) {
  const { handleLogged, otherParam } = route.params;

  return (
    <View>
      <Text>Login page</Text>
      <Button
        title="login button"
        onPress = {() => handleLogged()}
      />
    </View>
  )
}
