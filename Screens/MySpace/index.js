import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header from '../../components/Header';

export default function index() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text>My Space Main page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})