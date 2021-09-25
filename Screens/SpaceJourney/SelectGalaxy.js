import React from 'react'
import { View, Text, Button, ScrollView, StyleSheet, FlatList } from 'react-native'

import SelectGalaxyHeader from '../../components/Header/SelectGalaxyHeader'
import MusicGenreItem from '../../components/SpaceJourney/MusicGenreItem'

export default function SelectGalaxy({ route, navigation }) {
  const musinGenre = Array('인디', '힙합', '발라드', '댄스', 'R&B/Soul', '포크/어쿠스틱', '락/메탈', 'CCM', '이외')
  
  const MusicGenreList = musinGenre.map((genre, index) => (
    <MusicGenreItem key={index} genre={genre} navigation={navigation}/>
  ));

  return (
    <View style={styles.container}>
      <ScrollView>
        <SelectGalaxyHeader/>
        <View style={styles.musicList}>
          {MusicGenreList}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  musicList: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
})