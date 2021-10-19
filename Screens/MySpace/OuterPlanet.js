import React, { useRef, useState, Component } from 'react'
import { View, Text, Button, Animated } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

import Header from '../../components/Header/Header';
import Planet from '../../components/MySpace/Planet';
import MusicThum from '../../components/MySpace/MusicThum';
import MusicDesc from '../../components/MySpace/MusicDesc';

export default function OuterPlanet({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Planet>
        <MusicThum navigation={navigation}/>
      </Planet>
      <MusicDesc/>
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: EStyleSheet.value('$primary_Main')
  },
  introDesc: {
    textAlign: 'center',
    fontSize: 20
  }
})