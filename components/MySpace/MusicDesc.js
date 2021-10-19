import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

import styleGuide from '../../utils/styleGuide';

export default function MusicDesc() {
  return (
    <View style={styles.container}>
      <Text style={[styleGuide.display_05, styles.singer]}>OHAYO MY NIGHT</Text>
      <Text style={[styleGuide.display_06, styleGuide.font_light, styles.title]}>D-Hack</Text>
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center'
  },
  singer: {
    textAlign: 'center',
    color: '#fff'
  },
  title: {
    textAlign: 'center',
    color: '#fff'
  }
})