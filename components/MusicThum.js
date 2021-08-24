import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity  } from 'react-native'
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';

export default function MusicThum({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/snoo.jpg")} style={styles.bgImage}/>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('InPlanet')}
        style={styles.button}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: vh(50),
    left: vw(50),
    height: vw(70),
    width: vw(70),
    transform: [
      { translateY: vw(-35) },
      { translateX: vw(-35) }
    ]
  },
  bgImage: {
    width: '100%', 
    height: '100%',
    borderRadius: vw(45),
    overflow: 'hidden'
  },
  button: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    transform: [
      { translateX: -30 },
      { translateY: -30 },
      { rotateZ: '90deg'}
    ],
    borderBottomColor: "#8ec5fc",
  }
})