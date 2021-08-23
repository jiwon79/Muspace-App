import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Landing({ navigation }) {
  return (
    <View>
      <Text>MuSpace</Text>
      <Text>Landing Page</Text>
      <Text>처음 소개 페이지!</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  )
}
