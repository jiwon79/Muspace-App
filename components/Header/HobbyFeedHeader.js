import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

export default function HobbyFeedHeader({ goBack }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => goBack()}
      >
        <AntDesign name='left'style={styles.icon}/>
      </TouchableOpacity>
      <Text style={styles.text}>hobby feed header</Text>
      <AntDesign name='plus'style={styles.icon}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  icon: {
    fontSize: 24
  },
  text: {
    fontSize: 20
  }
})