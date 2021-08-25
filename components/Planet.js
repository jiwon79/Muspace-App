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
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    top: vh(50)-vw(45),
    alignSelf: 'center',
    height: vw(90),
    width: vw(90),
    borderRadius: vw(45),
    backgroundColor: '#aaaaaa'
  }
})