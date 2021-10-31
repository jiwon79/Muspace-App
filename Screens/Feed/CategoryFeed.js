import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import PagerView from 'react-native-pager-view';
import { AntDesign } from '@expo/vector-icons';
import axios from "axios";
import { Buffer } from "buffer"

import BottomMusicBar from "../../components/Music/BottomMusicBar";
import CategoryFeedHeader from '../../components/Feed/CategoryFeed/CategoryFeedHeader';
import FeedContent from '../../components/Feed/CategoryFeed/FeedContent';

import { getFeeds } from "../../modules/categoryFeed";

export default function CategoryFeed({ navigation, route }) {
  const { data, loading, error } = useSelector(state => state.categoryFeed.feeds);
  console.log(data, loading, error)
  const dispatch = useDispatch();
  const category = route.params.category;
  const APIURL = 'http://1e14-121-152-26-223.ngrok.io/';

  const [activeIndex, setActiveIndex] = useState(0);
  const [feedList, setFeedList] = useState([]);
  const pager = useRef(0);
  const [feedNum, setFeedNum] = useState(0);
  const [feedComponents, setFeedComponents] = useState(null);
  const [networkError, setNetworkError] = useState(false);

  useEffect(() => {
    dispatch(getFeeds({category}));
    setFeedList(data);
  }, [dispatch])




  // const fetchFeedData = async () => {
  //   const feedFetchData = await axios.get(APIURL+'get_post?category='+category)
  //     .then(function (response) {
  //       return response.data
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       console.log("error");
  //     });
  //   console.log(feedFetchData);
  //   setFeedList(feedFetchData);
  //
  //   if (!networkError) {
  //     console.log(feedFetchData);
  //     setFeedList(feedFetchData);
  //
  //     for (let i=0; i<feedFetchData.length; i++) {
  //       const postId = feedFetchData[i].id;
  //       const imageResponse = await axios.get(APIURL+'get_image?post_id='+postId, {
  //         responseType: 'arraybuffer'
  //       });
  //       const imageData = await Buffer.from(imageResponse.data, 'binary').toString('base64');
  //       const imageURI = await 'data:image/png;base64,' + imageData;
  //       console.log(postId);
  //       setFeedList(feedList => [
  //         ...feedList,
  //         feedList[i].imageURL = imageURI
  //       ]);
  //     }
  //   }
  // }

  // useEffect(() => {
  //   fetchFeedData();
  // }, []);

  // useEffect(() => {
  //   if (feedList != null) {
  //     setFeedNum(feedList.length);
  //     const components = feedList.map((feed, index) =>{
  //       return (
  //         <View key={index+1}>
  //           <FeedContent
  //             title={feed.title}
  //             content={feed.contents}
  //             imageURL={feed.imageURL}
  //           />
  //         </View>
  //       )});
  //     setFeedComponents(components);
  //     pager.current.setPage(activeIndex)
  //   }
  // }, [feedList, feedNum])

  if (loading) return <View><Text>loading...</Text></View>
  if (error) return <View><Text>error</Text></View>
  // return  <View><Text>{JSON.stringify(data)}</Text></View>

  return (
    <View style={styles.container}>
      <CategoryFeedHeader
        category={category}
        navigation={navigation}
      />
      <View style={styles.contentContainer}>
        {/*<TouchableOpacity*/}
        {/*  onPress={() => {*/}
        {/*    if (activeIndex !== 0)*/}
        {/*      pager.current.setPage(activeIndex-1)*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <AntDesign name="left" color="black" style={styles.arrowIcon}/>*/}
        {/*</TouchableOpacity>*/}
        <FlatList
          keyExtractor={item => JSON.stringify(item)}
          data={data}
          renderItem={({item}) => <FeedContent feed={item}/>}
        />
        {/*<Text>*/}
        {/*  {JSON.stringify(data)}*/}
        {/*</Text>*/}

        {/*{feedNum === 0 ? <Text style={styles.noticeText}>게시글이 없습니다.</Text> : <Text></Text>}*/}
        {/*<PagerView*/}
        {/*  ref={pager}*/}
        {/*  onPageSelected={({ nativeEvent }) => setActiveIndex(nativeEvent.position)}*/}
        {/*  style={styles.viewPager}*/}
        {/*  initialPage={0}*/}
        {/*  showPageIndicator={true}*/}
        {/*>*/}
        {/*  {feedComponents}*/}
        {/*</PagerView>*/}

        {/*<TouchableOpacity*/}
        {/*  onPress={() => {*/}
        {/*    if (activeIndex !== feedNum-1)*/}
        {/*      pager.current.setPage(activeIndex+1)*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <AntDesign name="right" color="black" style={styles.arrowIcon}/>*/}
        {/*</TouchableOpacity>*/}
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