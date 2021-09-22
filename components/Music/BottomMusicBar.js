import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';

export default function BottomMusicBar() {
  return (
    <View style={styles.container}>
      <Text>bottom music bar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#eee',
    width: vw(100),
    height: 50,
    bottom: 0,
    zIndex: 10
  }
})