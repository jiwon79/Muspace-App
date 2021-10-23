import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import styleGuide from "../../utils/styleGuide";
import Calendar from './../../assets/icon/Calendar_white.svg'
import PlayList from './../../assets/icon/Playlist_white.svg'
import Footprint from './../../assets/icon/FootPrint_white.svg'
import Edit from './../../assets/icon/Edit_white.svg'

export default function InPlanetMenu() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Calendar/>
        <Text style={[styles.text, styleGuide.display_08]}>캘린더</Text>
      </View>
      
      <View style={styles.iconContainer}>
        <PlayList/>
        <Text style={[styles.text, styleGuide.display_08]}>플레이리스트</Text>
      </View>
      
      <View style={styles.iconContainer}>
        <Footprint/>
        <Text style={[styles.text, styleGuide.display_08]}>발자국</Text>
      </View>

      <View style={styles.iconContainer}>
        <Edit/>
        <Text style={[styles.text, styleGuide.display_08]}>편집</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 24,
    alignSelf: 'center',
    width: 300,
    height: 66,
    borderRadius: 33,
    borderWidth: 2,
    borderColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  iconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
  },
  text: {
    textAlign: 'center',
    color: '#fff'
  },
  icon: {
    textAlign: 'center',
    fontSize: 40,
    color: 'black'
  }
})
