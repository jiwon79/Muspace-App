import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Camera from '../../../../assets/icon/Camera.svg'
import styleGuide from "../../../../utils/styleGuide";

export default function CameraButton() {
  return (
    <View style={styles.container}>
      <Camera/>
      <Text style={[styleGuide.display_06, styles.text]}>갤러리 선택</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 133,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    marginLeft: 12
  }
})