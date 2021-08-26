import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Register() {
  return (
    <View>
      <Text style={styles.title}>Register page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20
  }
})
