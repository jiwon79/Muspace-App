import React, { useEffect, useRef } from 'react'
import { View, Text, Button, FlatList, Animated, StyleSheet } from 'react-native'
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';

import Header from '../../components/Header/Header';
import Planet from '../../components/Planet';
import Hobby from '../../components/Hobby';

const hobbyList = ['취미', '운동', '음악', '글귀', '여행', '책'];

export default function InPlanet({ navigation }) {
  const ScaleAnim = useRef(new Animated.Value(1)).current;
  const TranslateAnim = useRef(new Animated.Value(vw(-10))).current;

  const hobbyComponents = hobbyList.map((hobby, index) =>(
    <Hobby key={index} hobby={hobby} navigation={navigation}/>
  ));

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
      
      <View style={styles.hobbyComponents}>
        {hobbyComponents}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hobbyComponents: {
    position: 'absolute',
    bottom: '15%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
    flexWrap: 'wrap'
  }
})