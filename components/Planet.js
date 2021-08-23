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
    height: vw(120),
    width: vw(120),
    transform: [
      { translateY: vw(-60) },
      { translateX: vw(-60) }
    ],
    borderRadius: vw(60),
    backgroundColor: '#aaaaaa'
  }
})