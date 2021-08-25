import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

export default function HobbyContentWriteHeader({ navigation, hobby }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
        <AntDesign name='left'style={styles.icon}/>
      </TouchableOpacity>
      <Text style={styles.text}>{hobby}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    textAlign: 'center'
  },
  icon: {
    fontSize: 24
  },
  text: {
    position: 'absolute',
    top: 10,
    left: '50%',
    fontSize: 20
  }
})