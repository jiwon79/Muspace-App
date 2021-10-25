import React, { useEffect, useRef, ReactElement } from 'react'
import {View, Animated } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

import { MySpaceInPlanetProp } from "../../utils/types";

import MySpaceHeader from '../../components/MySpace/MySpaceHeader';
import Planet from '../../components/MySpace/Planet/Planet';
import InPlanetMenu from '../../components/MySpace/InPlanetMenu';
import BottomMusicBar from '../../components/Music/BottomMusicBar';
import LifeCategory from '../../components/MySpace/LifeCategory/LifeCategory';

export default function InPlanet({ route, navigation }: MySpaceInPlanetProp): ReactElement {
  const ScaleAnim = useRef(new Animated.Value(1)).current;
  const TranslateAnim = useRef(new Animated.Value(-78)).current;
  const FadeInAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const planetScale = Animated.timing(
      ScaleAnim,
      {
        toValue: 1.7,
        duration: 500,
        useNativeDriver: true
      }
    );

    const planetTranslate = Animated.timing(
      TranslateAnim,
      {
        toValue: 335/2+94-0.45*EStyleSheet.value('$screenHeight'),
        duration: 500,
        useNativeDriver: true
      }
    );

    const hobbyFadeIn = Animated.timing(
      FadeInAnim,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }
    )
    
    Animated.sequence([
      Animated.parallel([planetScale, planetTranslate]), 
      hobbyFadeIn
    ]).start();
  }, [ScaleAnim, TranslateAnim, FadeInAnim])

  return (
    <View style={styles.container} >
      <MySpaceHeader route={route} navigation={navigation}/>
      <Animated.View style={{opacity: FadeInAnim}}>
        <InPlanetMenu/>
      </Animated.View>

      <Animated.View
        style={{
          transform: [
            { scale: ScaleAnim },
            { translateY: TranslateAnim },
          ],
        }}
      >
        <Planet/>
      </Animated.View>

      <Animated.View style={[{ opacity: FadeInAnim }]}>
        <LifeCategory navigation={navigation}/>
      </Animated.View>

      <BottomMusicBar/>
    </View>
  )
}

const styles = EStyleSheet.create({
  $planetSize: 568,
  container: {
    flex: 1,
    backgroundColor: EStyleSheet.value('$primary_Main'),
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