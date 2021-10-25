import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

export default function ButtonModule(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, props.style]}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '60%',
    height: 40,
    borderWidth: 2,
    borderColor: '#666666',
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  }
})