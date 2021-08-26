import React from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'

import ButtonModule from '../../components/atom/ButtonModule';

export default function Login({ route, navigation }) {
  const { handleLogged, otherParam } = route.params;

  return (
    <View>
      <Text style={styles.title}>Login page</Text>
      <TextInput
        placeholder="name"
        style={styles.inputLogin}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        style={styles.inputPassword}
      />
      
      <ButtonModule
        text="login"
        onPress = {() => handleLogged()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20
  },
  inputLogin: {
    marginLeft: '8%',
    marginRight: '8%',
    fontSize: 15,
    marginBottom: 15
  },
  inputPassword: {
    marginLeft: '8%',
    marginRight: '8%',
    fontSize: 15,
    marginBottom: 30
  }
})