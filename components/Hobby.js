import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Hobby({ hobby, navigation }) {
  return (
    <TouchableOpacity 
      style={styles.hobby}
      onPress={() => navigation.navigate('HobbyFeed')}  
    >
      <Text style={styles.text}>{hobby}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  hobby: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: '#fad0c4'
  },
  text: {
    textAlign: 'center',
    fontSize: 20
  }
})