import React from 'react'
import { View, Text, StyleSheet, ImageBackground  } from 'react-native'
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function Planet(props) {
  return (
    <ImageBackground style={styles.planet} source={require('../../../assets/image/Planet.png')}>
      {props.children}
    </ImageBackground>
  )
}

const styles = EStyleSheet.create({
  $planetSize: 335,
  $planetHalfSize: '$planetSize/2',
  planet: {
    position: 'absolute',
    top: '45% - $planetHalfSize',
    alignSelf: 'center',
    justifyContent: 'center',
    height: '$planetSize',
    width: '$planetSize',
    borderRadius: '0.5 * $planetSize',
  }
})