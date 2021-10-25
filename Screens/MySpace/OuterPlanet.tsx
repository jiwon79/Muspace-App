import React, { useRef, useState, ReactElement } from 'react'
import { View, Text, Button, Animated } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

import {MySpaceOuterPlanetProp} from "../../utils/types";

import MySpaceHeader from '../../components/MySpace/MySpaceHeader';
import Planet from '../../components/MySpace/Planet';
import MusicThum from '../../components/MySpace/Planet/MusicThum';
import MusicDesc from '../../components/MySpace/MusicDesc';

export default function OuterPlanet({ route, navigation }: MySpaceOuterPlanetProp):ReactElement {
  return (
    <View style={styles.container}>
      <MySpaceHeader route={route} navigation={navigation} />
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