import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

export default function HobbyFeedHeader() {
  return (
    <View style={styles.container}>
      <AntDesign name='left'style={styles.icon}/>
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