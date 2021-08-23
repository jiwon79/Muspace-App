import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function header_my() {
  return (
    <View style={styles.container}>
      <Text>myspace header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
