import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

export default function FeedHeader({ category, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('InPlanet')}>
        <AntDesign name='left'style={styles.icon}/>
      </TouchableOpacity>
      <Text style={styles.text}>{category}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('FeedWrite')}>
        <AntDesign name='plus'style={styles.icon}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ddd'
  },
  icon: {
    fontSize: 24
  },
  text: {
    fontSize: 20
  }
})