import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header_my from './../../components/Header_my';

export default function index() {
  return (
    <View style={styles.container}>
      <Header_my/>
      <Text>My Space Main page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})