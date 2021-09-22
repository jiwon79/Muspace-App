import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

import { JourneyGalaxyStackProp } from '../../utils/types'
import JourneyGalaxyHeader from '../../components/Header/JourneyGalaxyHeader'
import MusicPlanet from '../../components/SpaceJourney/MusicPlanet'
import BottomMusicBar from '../../components/Music/BottomMusicBar'

export default function JourneyGalaxy({ route, navigation }: JourneyGalaxyStackProp) {
  const genre:string = route.params.genre;
  const musicTitleList = Array('음악1', '음악2', '음악3', '음악4', '음악5', '음악6', '음악7', '음악8', '음악9', '음악10', '음악11', '음악12', '음악13', '음악14', '음악15', '음악16', '음악17', '음악18')
  
  const randomNum = (index: number) => {
    let num = Math.floor(Math.random() * 40);
    if (index%2 == 1) {
      return 60-num;
    } else {
      return num-60;
    }
  }

  return (
    <View style={styles.container}>
      <JourneyGalaxyHeader navigation={navigation} genre={genre}/>
      <FlatList
        style={styles.flastList}
        data = {musicTitleList}
        keyExtractor = {item => item}
        inverted={true}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between'
        }}
        renderItem = {({item, index}) => 
          <MusicPlanet 
            title={item}
            style={{
              transform: [{ translateX: randomNum(index) }]
            }}
          />
        }
      />
      <BottomMusicBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flastList: {
  }
})