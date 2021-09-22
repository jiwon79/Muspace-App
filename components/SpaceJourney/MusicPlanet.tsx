import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
  title: string
}

export default function MusicPlanet({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    margin: 20,
    width: '40%'
  },
  text: {
    fontSize: 30
  }
})