import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import MySpace_Header from '../../components/MySpace_Header';

export default function index() {
  return (
    <View style={styles.container}>
      <MySpace_Header/>
      <Text>My Space Main page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})