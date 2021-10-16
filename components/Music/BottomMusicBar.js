import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';

import styleGuide from '../../utils/styleGuide';

export default function BottomMusicBar() {
  return (
    <View style={styles.container}>
      <Text style={[styleGuide.display_01, styleGuide.font_light]}>bottom music bar</Text>
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '#eee',
    width: '$screenWidth',
    height: 50,
    zIndex: 10,
  }
})