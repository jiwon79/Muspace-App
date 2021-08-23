import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'

export default function Login({ route, navigation }) {
  const { handleLogged, otherParam } = route.params;

  return (
    <View>
      <Text>Login page</Text>
      <TextInput
        placeholder="name"
      />
      <TextInput
        placeholder="password"
      />
      
      <Button
        title="login"
        onPress = {() => handleLogged()}
      />
    </View>
  )
}
