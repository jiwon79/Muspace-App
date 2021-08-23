import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Planet() {
  return (
    <View style={styles.planet}></View>
  )
}

const styles = StyleSheet.create({
  planet: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '120vw',
    width: '120vw',
    transform: [
      { translateY: '-50%' },
      { translateX: '-50%' }
    ],
    borderRadius: '50%',
    backgroundColor: '#aaaaaa'
  }
})