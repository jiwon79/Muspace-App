import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Hobby({ hobby }) {
  return (
    <View style={styles.hobby}>
      <Text style={styles.text}>{hobby}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  hobby: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: '#fad0c4'
  },
  text: {
    textAlign: 'center',
    fontSize: 20
  }
})