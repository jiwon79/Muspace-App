import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import ButtonModule from '../../components/atom/ButtonModule'

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MuSpace</Text>
      <ButtonModule
        text="Register"
        onPress={() => navigation.navigate("Register")}
        style={styles.registerButton}
      />
      <ButtonModule
        text="Login"
        onPress={() => navigation.navigate("Login")}
        style={styles.loginButton}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%'
  },
  title: {
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30
  },
  registerButton: {
    alignSelf: 'center',
    marginBottom: 20
  },
  loginButton: {
    marginBottom: 30
  }
})