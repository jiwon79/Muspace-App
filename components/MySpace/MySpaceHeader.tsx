import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { MySpaceOuterPlanetProp } from "../../utils/types";
import { MySpaceInPlanetProp } from "../../utils/types";

import styleGuide from '../../utils/styleGuide';
import HeaderStyle from "../atom/HeaderStyle";
import Discovery from '../../assets/icon/Discovery_white.svg'
import MainMenu from '../../assets/icon/MainMenu_white.svg'
import Back from '../../assets/icon/Back_white.svg'

export default function MySpaceHeader(
  { route, navigation }: MySpaceOuterPlanetProp | MySpaceInPlanetProp)
{
  return (
    <View style={HeaderStyle.header}>
      {/*@ts-ignore*/}
      {route.name === 'OuterPlanet'
      ? <TouchableOpacity>
          <Discovery style={[HeaderStyle.icon]}/>
        </TouchableOpacity>
      : <TouchableOpacity
          onPress={() => {navigation.goBack()}}
        >
          <Back style={[HeaderStyle.icon]}/>
        </TouchableOpacity>
      }

      <Text style={[styleGuide.display_04, HeaderStyle.title]}>
        기셔<Text style={styleGuide.font_light}>님의 행성</Text>
      </Text>

      <TouchableOpacity>
        <MainMenu style={[HeaderStyle.icon]}/>
      </TouchableOpacity>
    </View>
  )
}