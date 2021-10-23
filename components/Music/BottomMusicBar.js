import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import styleGuide from '../../utils/styleGuide';
import Pause from './../../assets/icon/Pause_white.svg'

export default function BottomMusicBar() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <ImageBackground style={styles.album} source={require('../../assets/image/Album.jpg')} />
        <View>
          <Text style={[styleGuide.display_07, styles.songTitle]}>
            OHAYO MY NIGHT
          </Text>
          <Text style={[styleGuide.display_08, styleGuide.font_light, styles.singer]}>
            D-Hack
          </Text>
        </View>
      </View>
      <Pause/>
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,

    width: '$screenWidth',
    height: 60,
    backgroundColor: EStyleSheet.value('$darkGray'),
    paddingLeft: 20,
    paddingRight: 20,
  },
  leftContent: {
    flexDirection: 'row'
  },
  album: {
    width: 40,
    height: 40,
    borderWidth: 1,
    marginRight: 12
  },
  songTitle: {
    color: EStyleSheet.value('$white')
  },
  singer: {
    color: EStyleSheet.value('$white')
  },
})