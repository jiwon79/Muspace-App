import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default function MusicGenreItem({ genre }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{genre}</Text>
      </View>
      <View style={styles.content}>
        <Text>dd</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '40%',
    height: 100,
    margin: '5%',
    borderWidth: 1,
    
  },
  title: {
    fontSize: 20
  },
  content: {
    flex: 1
  }
})