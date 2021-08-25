import React, { useEffect, useRef } from 'react'
import { View, Text, Button, FlatList, Animated, StyleSheet } from 'react-native'
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';

import Header from '../../components/Header';
import Planet from '../../components/Planet';
import Hobby from '../../components/Hobby';

const hobbyList = ['취미', '운동', '음악', '글귀', '여행', '책'];

export default function InPlanet({ navigation }) {
  const ScaleAnim = useRef(new Animated.Value(1)).current;
  const TranslateAnim = useRef(new Animated.Value(vw(-10))).current;

  useEffect(() => {
    const planetScale = Animated.timing(
      ScaleAnim,
      {     
        toValue: 2,
        duration: 1000,
        useNativeDriver: true
      }
    );

    const planetTranslate = Animated.timing(
      TranslateAnim,
      {
        toValue: vh(-20),
        duratoin: 1000,
        useNativeDriver: true
      }
    );

    Animated.parallel([
      planetScale,
      planetTranslate
    ]).start();
  }, [ScaleAnim, TranslateAnim])

  return (
    <View style={styles.container}>
      <Header/>
      <Animated.View
        style={{
          transform: [
            { scale: ScaleAnim },
            { translateY: TranslateAnim }
          ],
        }}
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})