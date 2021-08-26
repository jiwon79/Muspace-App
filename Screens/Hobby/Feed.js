import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PagerView from 'react-native-pager-view';
import { AntDesign } from '@expo/vector-icons'; 

import HobbyFeedHeader from '../../components/Header/HobbyFeedHeader';
import HobbyContent from '../../components/HobbyContent';

export default function Feed({ navigation, route }) {
  const hobby = route.params.hobby;
  const [activeIndex, setActiveIndex] = useState(0);
  const pager = useRef(0);
  // api 받을 때 갯수 세서 넣어줘야됨
  const feedNum = 3;

  return (
    <View style={styles.container}>
      <HobbyFeedHeader 
        hobby={hobby}
        navigation={navigation}
      />
      <View style={styles.contentContainer}>
        <TouchableOpacity
          onPress={() => {
            if (activeIndex != 0)
              pager.current.setPage(activeIndex-1)
          }}
        >
          <AntDesign name="left" color="black" style={styles.arrowIcon}/>
        </TouchableOpacity>

        <PagerView
          ref={pager}
          onPageSelected={({ nativeEvent }) => setActiveIndex(nativeEvent.position)}
          style={styles.viewPager} 
          initialPage={0}
          showPageIndicator={true}
        >
          <View key="1">
            <HobbyContent
              imageURL='https://reactjs.org/logo-og.png'
              title='제목1'
              content='내용1'
            />
          </View>
          <View key="2">
            <HobbyContent
              imageURL='https://reactjs.org/logo-og.png'
              title='제목2'
              content='내용2'
            />
          </View>
          <View key="3">
            <HobbyContent
              imageURL='https://reactjs.org/logo-og.png'
              title='제목3'
              content='내용3'
            />
          </View>
        </PagerView>

        <TouchableOpacity
          onPress={() => {
            if (activeIndex != feedNum-1)
              pager.current.setPage(activeIndex+1)
          }}
        >
          <AntDesign name="right" color="black" style={styles.arrowIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  viewPager: {
    flex: 1,
    height: '100%'
  },
  arrowIcon: {
    fontSize: 24,
    padding: 10
  }
});