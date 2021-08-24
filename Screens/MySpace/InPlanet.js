import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'

import Planet from '../../components/Planet';
import Hobby from '../../components/Hobby';

const hobbyList = ['취미', '운동', '음악', '글귀', '여행', '책'];

export default function InPlanet({ navigation }) {
  return (
    <View>
      <Text>on planet</Text>
      <Planet/>
      <Button
      title="Outer Planet"
      onPress={() => navigation.navigate('OuterPlanet')}
      />
      <FlatList
        keyExtractor={item => item.toString()}
        data={hobbyList}
        renderItem={(hobby) => <Hobby hobby={hobby.item}/>}
      />
    </View>
  )
}
