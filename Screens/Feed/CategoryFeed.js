import React from 'react'
import { View, StyleSheet } from 'react-native'

import BottomMusicBar from "../../components/Music/BottomMusicBar";
import CategoryFeedHeader from '../../components/Feed/CategoryFeed/CategoryFeedHeader';
import FeedListTemplate from '../../components/Feed/CategoryFeed/FeedListTemplate'


export default function CategoryFeed({ navigation, route }) {
  const category = route.params.category;

  return (
    <View style={styles.container}>
      <CategoryFeedHeader
        category={category}
        navigation={navigation}
      />
      <FeedListTemplate
        navigation={navigation}
        route={route}
      />
      <BottomMusicBar/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noticeText: {
    fontSize: 24,
    textAlign: 'center',
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