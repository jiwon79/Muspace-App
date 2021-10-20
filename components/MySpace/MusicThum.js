import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';
import Pause from './../../assets/icon/Pause_white.svg'

export default function MusicThum({ navigation }) {
  return (
    <ImageBackground 
      source={require('../../assets/image/Album.jpg')}
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
    overflow: 'hidden',
    height: 224,
    width: 224,
    borderRadius: 112
  },
  button: {
    alignSelf: 'center',
  },
  pauseIcon: {
    transform: [
      { scaleX: 2 },
      { scaleY: 2 }
    ]
  }
})