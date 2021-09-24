import React from 'react'
import { View, Text } from 'react-native'

import OuterSideNavHeader from '../../components/Header/OuterSideNavHeader'

export default function EditOuterPlanet({ route, navigation }) {
  return (
    <View>
      <OuterSideNavHeader navigation={navigation} />
      <Text>edit outer planet</Text>
    </View>
  )
}
