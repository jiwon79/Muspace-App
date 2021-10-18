import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';
import Pause from './../../assets/icon/Pause_white.svg'

export default function MusicThum({ navigation }) {
  return (
    <ImageBackground 
      source={require('./../../assets/image/album.png')} 
      style={styles.imageContainer}
      resizeMode='contain'
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('InPlanet')}
        style={styles.button}
      >
        <Pause style={styles.pauseIcon}/>
      </TouchableOpacity>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    // height: 224,
    // width: 224,
    width: vw(70),
    height: vw(70),
    borderRadius: vw(35)
  },
  button: {
    alignSelf: 'center',
    // width: 22,
    // height: 22,
  },
  pauseIcon: {
    transform: [
      { scaleX: 2 },
      { scaleY: 2 }
    ]
  }
})