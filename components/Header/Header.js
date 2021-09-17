import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Ionicons name='musical-note' style={styles.icon}/>
      <Text style={styles.text}>이름</Text>
      <Feather name='more-vertical' style={styles.icon}/>
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