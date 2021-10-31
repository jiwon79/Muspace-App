import React, { ReactElement } from "react";
import {View, Text, StyleSheet, TouchableOpacity } from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";
import HeaderStyle from "../../atom/HeaderStyle";
import styleGuide from "../../../common/utils/styleGuide";

import Back from '../../../assets/icon/Back_white32.svg'
import Next from '../../../assets/icon/Next_white32.svg'

export default function InputImageHeader(): ReactElement {
  return (
    <View style={[HeaderStyle.header, styles.header]}>
      <TouchableOpacity>
        <Back/>
      </TouchableOpacity>

      <Text style={[HeaderStyle.title, styleGuide.display_05]}>
        <Text style={styleGuide.font_light}>새 게시물-</Text>
        사진 추가
      </Text>

      <TouchableOpacity>
        <Next/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: EStyleSheet.value('$darkGray_02')
  }
})