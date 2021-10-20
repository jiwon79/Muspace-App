import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

import styleGuide from '../../utils/styleGuide';
import Discovery from './../../assets/icon/Discovery_white.svg'
import MainMenu from './../../assets/icon/MainMenu_white.svg'
import Back from './../../assets/icon/Back_white.svg'

export default function Header({ route, navigation }) {
  return (
    <View style={styles.container}>
      {route.name === 'OuterPlanet'
      ? <TouchableOpacity>
          <Discovery style={[styles.icon]}/>
        </TouchableOpacity>
      : <TouchableOpacity
          onPress={() => {navigation.goBack()}}
        >
          <Back style={[styles.icon]}/>
        </TouchableOpacity>
      }
      
      <Text style={[styleGuide.display_04, styles.title]}>
        기셔<Text style={styleGuide.font_light}>님의 행성</Text>
      </Text>
      
      <TouchableOpacity>
        <MainMenu style={[styles.icon]}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  title: {
    color: '#fff'
  },
  icon: {
    transform: [{
      scale: 4/3
    }]
  }
})