import React, { useRef, useState, Component } from 'react'
import { View, Text, Button, StyleSheet, Animated } from 'react-native'

import Header from '../../components/Header/Header';
import Planet from '../../components/MySpace/Planet';
import MusicThum from '../../components/MySpace/MusicThum';
import Introduce from '../../components/MySpace/Introduce';
import MusicDesc from '../../components/MySpace/MusicDesc';

export default function OuterPlanet({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Introduce>
        <Text style={styles.introDesc}>소개글</Text>
      </Introduce>
      <Planet/>
      <MusicThum navigation={navigation}/>
      <MusicDesc/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  introDesc: {
    textAlign: 'center',
    fontSize: 20
  }
})