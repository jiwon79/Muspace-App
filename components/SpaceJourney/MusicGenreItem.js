import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function MusicGenreItem({ genre, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.itemHeader}>
        <Text style={styles.title}>{genre}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('JourneyGalaxy', {genre})}>
          <AntDesign name="right" style={styles.navigationIcon}/>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.album}><Text>.</Text></View>
        <View style={styles.album}><Text>.</Text></View>
        <View style={styles.album}><Text>.</Text></View>
        <View style={styles.album}><Text>.</Text></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '40%',
    height: 100,
    margin: '5%',
    borderWidth: 1,
  },
  itemHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1
  },
  title: {
    fontSize: 20,
  },
  navigationIcon: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  album: {
    width: '50%',
    height: '50%',
    borderWidth: 1
  }
})