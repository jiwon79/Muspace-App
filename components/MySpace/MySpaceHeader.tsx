import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { MySpaceOuterPlanetProp } from "../../common/utils/types";
import { MySpaceInPlanetProp } from "../../common/utils/types";

import styleGuide from '../../common/utils/styleGuide';
import HeaderStyle from "../atom/HeaderStyle";
import Discovery from '../../assets/icon/Discovery_white32.svg'
import MainMenu from '../../assets/icon/MainMenu_white32.svg'
import Back from '../../assets/icon/Back_white32.svg'

export default function MySpaceHeader(
  { route, navigation }: MySpaceOuterPlanetProp | MySpaceInPlanetProp)
{
  return (
    <View style={HeaderStyle.header}>
      {/*@ts-ignore*/}
      {route.name === 'OuterPlanet'
      ? <TouchableOpacity>
          <Discovery/>
        </TouchableOpacity>
      : <TouchableOpacity
          onPress={() => {navigation.goBack()}}
        >
          <Back/>
        </TouchableOpacity>
      }

      <Text style={[styleGuide.display_04, HeaderStyle.title]}>
        기셔<Text style={styleGuide.font_light}>님의 행성</Text>
      </Text>

      <TouchableOpacity>
        <MainMenu/>
      </TouchableOpacity>
    </View>
  )
}