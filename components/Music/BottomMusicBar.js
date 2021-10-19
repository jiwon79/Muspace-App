import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import styleGuide from '../../utils/styleGuide';
import Pause from './../../assets/icon/Pause_white.svg'

export default function BottomMusicBar() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.album} source={require('./../../assets/image/musicBarAlbum4.png')} />
      <View>
        <Text style={[styleGuide.display_07, styles.songTitle]}>
          OHAYO MY NIGHT
        </Text>
        <Text style={[styleGuide.display_08, styleGuide.font_light, styles.singer]}
          >D-Hack
        </Text>
      </View>
      <Pause/>
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: EStyleSheet.value('$darkGray'),
    width: '$screenWidth',
    height: 60,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  album: {
    width: 40,
    height: 40,
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 12
  },
  songTitle: {
    color: EStyleSheet.value('$white')
  },
  singer: {
    color: EStyleSheet.value('$white')
  },
  pauseIcon: {
    position: 'relative',
    right: 0
  }
})