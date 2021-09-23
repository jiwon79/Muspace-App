import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default function Introduce(props) {
  return (
    <View style={styles.container}>
      <View style={styles.arrow}>
        {props.children}
      </View>
      <View style={styles.after}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: '5%'
  },
  arrow: {
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#88b7d5',
    borderRadius: 5,
    width: 300,
    height: 60
  },
  after: {
    top: '100%',
    left: '50%',
    height: 0,
    width: 0,
    position: 'absolute',
    borderColor: '#rgba(100,100,100,0)',
    borderTopColor: '#88b7d5',
    borderWidth: 30,
    marginLeft: -30
  }
})
