import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';

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
    height: vw(90),
    width: vw(90),
    transform: [
      { translateY: vw(-45) },
      { translateX: vw(-45) }
    ],
    borderRadius: vw(45),
    backgroundColor: '#aaaaaa'
  }
})