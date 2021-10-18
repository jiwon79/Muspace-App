import React from 'react'
import { View, Text, StyleSheet, ImageBackground  } from 'react-native'
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function Planet(props) {
  return (
    <ImageBackground style={styles.planet} source={require('./../../assets/image/Planet.png')}>
      {props.children}
    </ImageBackground>
  )
}

const styles = EStyleSheet.create({
  planet: {
    marginTop: '10%',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 335,
    width: 335,
    borderRadius: vw(45),
  }
})