import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';

export default function MusicDesc() {
  return (
    <View style={styles.container}>
      <Text style={styles.singer}>카더가든</Text>
      <Text style={styles.title}>나무</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: vh(80),
    alignSelf: 'center'
  },
  singer: {
    textAlign: 'center',
    fontSize: 30
  },
  title: {
    textAlign: 'center',
    fontSize: 20
  }
})