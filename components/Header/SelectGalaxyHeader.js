import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

export default function SelectGalaxyHeader() {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="space-shuttle" style={styles.icon} />
      <Text style={styles.text}>갤럭시를 선택하세요!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    marginTop: 20
  },
  icon: {
    fontSize: 30,
    color: 'black'
  },
  text: {
    fontSize: 30
  }
})