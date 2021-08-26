import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PagerView from 'react-native-pager-view';
import { AntDesign } from '@expo/vector-icons'; 

import HobbyFeedHeader from '../../components/Header/HobbyFeedHeader';
import HobbyContent from '../../components/HobbyContent';

export default function Feed({ navigation, route }) {
  console.log(route)
  const hobby = route.params.hobby;

  return (
    <View style={styles.container}>
      <HobbyFeedHeader 
        hobby={hobby}
        navigation={navigation}
      />
      <View style={styles.contentContainer}>
        <AntDesign name="left" color="black" style={styles.arrowIcon}/>
        <PagerView
          style={styles.viewPager} 
          initialPage={0}
          showPageIndicator={true}
        >
          <View key="1">
            <HobbyContent
              imageURL='https://reactjs.org/logo-og.png'
              title='제목제목'
              content='내용내용'
            />
          </View>
          <View key="2">
            <HobbyContent
              imageURL='https://reactjs.org/logo-og.png'
              title='제목제목'
              content='내용내용'
            />
          </View>
          <View key="3">
            <HobbyContent
              imageURL='https://reactjs.org/logo-og.png'
              title='제목제목'
              content='내용내용'
            />
          </View>
        </PagerView>
        <AntDesign name="right" color="black" style={styles.arrowIcon}/>
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