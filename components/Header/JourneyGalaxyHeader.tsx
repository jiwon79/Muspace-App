import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

type JourneyGalaxyHeaderProps = {
  navigation: any,
  genre: string
}

export default function JourneyGalaxyHeader({ navigation, genre }: JourneyGalaxyHeaderProps) {
  return (
    <View style={styles.container}>
      <AntDesign 
        name="arrowleft" 
        style={styles.icon}
        onPress={() => navigation.goBack()}
      />
      <Text>{genre}</Text>
      <FontAwesome name="battery-full" style={styles.icon} />
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
    fontSize: 24,
    color: "black"
  }
})