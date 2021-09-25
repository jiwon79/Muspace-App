import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import { OuterPlanetDrawerNavProp } from '../../utils/types';

export default function OuterSideNavHeader({ route, navigation }: OuterPlanetDrawerNavProp) {
  return (
    <View style={styles.container}>
      <AntDesign 
        name="arrowleft" 
        style={styles.icon}
        onPress={() => navigation.goBack()}
      />
      <Text>Edit MyPlanet</Text>
      <Text>.</Text>
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
    color: 'black',
    fontSize: 24
  }
})