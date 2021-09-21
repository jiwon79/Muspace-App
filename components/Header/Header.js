import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Header({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name='musical-note' style={styles.icon}/>
      <Text style={styles.text}>이름</Text>
      <TouchableOpacity>
        <Feather 
          name='more-vertical' 
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  icon: {
    fontSize: 24
  },
  text: {
    fontSize: 20
  }
})