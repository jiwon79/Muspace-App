import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { useSelector, useDispatch } from "react-redux";

import BottomMusicBar from "../../components/Music/BottomMusicBar";
import CategoryFeedHeader from '../../components/Feed/CategoryFeed/CategoryFeedHeader';
import FeedContent from '../../components/Feed/CategoryFeed/FeedContent';

import { getFeeds } from "../../modules/categoryFeed";

export default function CategoryFeed({ navigation, route }) {
  const { data, loading, error } = useSelector(state => state.categoryFeed.feeds);
  console.log(data, loading, error)
  const dispatch = useDispatch();
  const category = route.params.category;

  useEffect(() => {
    dispatch(getFeeds({category}));
  }, [dispatch])

  return (
    <View style={styles.container}>
      <CategoryFeedHeader
        category={category}
        navigation={navigation}
      />
      <View style={styles.contentContainer}>
        {loading
          ? <View><Text>loading...</Text></View>
          : error
          ? <View><Text>error</Text></View>
          : <FlatList
              keyExtractor={item => JSON.stringify(item)}
              data={data}
              renderItem={({item}) => <FeedContent feed={item}/>}
            />
        }
      </View>
      <BottomMusicBar/>
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