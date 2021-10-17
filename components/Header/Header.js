import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

import styleGuide from '../../utils/styleGuide';
import Discovery from './../../assets/icon/Discovery_white.svg'
import More from './../../assets/icon/More_white.svg'

export default function Header({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => console.log('press')}
        >
        <Discovery/>
      </TouchableOpacity>
      
      <Text style={[styleGuide.display_04, styles.title]}>
        기셔님의 행성
      </Text>
      
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
      >
        <More/>
      </TouchableOpacity>
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  title: {
    color: '#fff'
  },
  text: {
    fontSize: 20
  }
})