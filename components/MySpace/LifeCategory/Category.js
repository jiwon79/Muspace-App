import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {TouchableHighlight} from 'react-native-gesture-handler'

import styleGuide from "../../../common/utils/styleGuide";

export default function Category({ category, navigation }) {
  return (
    <TouchableHighlight
      style={styles.category}
      onPress={() => navigation.navigate('CategoryFeed', {category})}
    >
      <Text style={[styles.text, styleGuide.display_06]}>{category}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  category: {
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