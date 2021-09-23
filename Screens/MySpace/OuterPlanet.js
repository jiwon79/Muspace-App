import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import Header from '../../components/Header/Header';
import Planet from '../../components/MySpace/Planet';
import MusicThum from '../../components/MySpace/MusicThum';
import Introduce from '../../components/MySpace/Introduce';
import MusicDesc from '../../components/MySpace/MusicDesc';

export default function OuterPlanet({ navigation }) {
  return (
    <View>
      <Header/>
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
  introDesc: {
    textAlign: 'center',
    fontSize: 20
  }
})