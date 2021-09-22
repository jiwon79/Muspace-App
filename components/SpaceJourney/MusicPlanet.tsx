import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
  title: string;
  style: object;
}

export default function MusicPlanet({ title, style }: Props) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: 'center',
    marginTop: 80
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  }
})