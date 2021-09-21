import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function JourneyGalaxyHeader({ navigation, genre }) {
  return (
    <View style={styles.container}>
      <AntDesign 
        name="arrowleft" 
        size={24} 
        color="black" 
        onPress={() => navigation.goBack()}
      />
      <Text>{genre}</Text>
      <FontAwesome name="battery-full" size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})