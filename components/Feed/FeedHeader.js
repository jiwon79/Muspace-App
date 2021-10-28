import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import styleGuide from "../../utils/styleGuide";
import HeaderStyle from "../atom/HeaderStyle";
import Back from '../../assets/icon/Back_white32.svg'
import EStyleSheet from "react-native-extended-stylesheet";

export default function FeedHeader({ category, navigation }) {
  return (
    <View style={[HeaderStyle.header, styles.header]}>
      <TouchableOpacity onPress={() => navigation.navigate('InPlanet')}>
        <Back/>
      </TouchableOpacity>
      <Text style={[styleGuide.display_04, HeaderStyle.title]}>{category}</Text>
      <View style={styles.empty}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: EStyleSheet.value('$darkGray_02')
  },
  empty: {
    width: 24,
  }
})