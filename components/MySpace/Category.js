import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {TouchableHighlight} from 'react-native-gesture-handler'

import styleGuide from "../../utils/styleGuide";

export default function Category({ hobby, navigation }) {
  return (
    <TouchableHighlight
      style={styles.hobby}
      onPress={() => navigation.navigate('HobbyFeed', {hobby})}
    >
      <Text style={[styles.text, styleGuide.display_06]}>{hobby}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  hobby: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ffffff',
    margin: 15,
    justifyContent: 'center',
    backgroundColor: '#aaa',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  }
})