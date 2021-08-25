import React, { useEffect, useRef } from 'react'
import { View, Text, Button, FlatList, Animated } from 'react-native'

import Planet from '../../components/Planet';
import Hobby from '../../components/Hobby';

const hobbyList = ['취미', '운동', '음악', '글귀', '여행', '책'];

export default function InPlanet({ navigation }) {
  const SacleAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.timing(
      SacleAnim,
      {     
        toValue: 2,
        duration: 1000,
        useNativeDriver: true
      }
    ).start();
  }, [SacleAnim])

  return (
    <View>
      <Text>on planet</Text>
      <Animated.View
        style={{ transform: [{ scale: SacleAnim }]}}
      >
        <Planet/>
      </Animated.View>
      
      <Button
      title="Outer Planet"
      onPress={() => navigation.navigate('OuterPlanet')}
      />
      <FlatList
        keyExtractor={item => item.toString()}
        data={hobbyList}
        renderItem={(hobby) => <Hobby hobby={hobby.item} navigation={navigation}/>}
      />
    </View>
  )
}
