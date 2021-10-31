import React, {useEffect} from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import FeedContent from "./FeedContent";
import {getFeeds} from "../../../modules/categoryFeed";

const FeedListTemplate = ({navigation, route}) => {
  const { data, loading, error } = useSelector(state => state.categoryFeed.feeds);
  console.log(data, loading, error)
  const dispatch = useDispatch();
  const category = route.params.category;

  useEffect(() => {
    dispatch(getFeeds({category}));
  }, [dispatch])

  return (
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
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
})
export default FeedListTemplate