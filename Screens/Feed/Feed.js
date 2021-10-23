import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PagerView from 'react-native-pager-view';
import { AntDesign } from '@expo/vector-icons'; 
import axios from "axios";
import { Buffer } from "buffer"

import FeedHeader from '../../components/Header/FeedHeader';
import HobbyContent from '../../components/Feed/HobbyContent';

export default function Feed({ navigation, route }) {
  const category = route.params.category;
  const APIURL = 'http://1e14-121-152-26-223.ngrok.io/';

  const [activeIndex, setActiveIndex] = useState(0);
  const [feedList, setFeedList] = useState([]);
  const pager = useRef(0);
  const [feedNum, setFeedNum] = useState(0);
  const [feedComponents, setFeedComponents] = useState(null);

  const fetchFeedData = async () => {
    const feedFetchData = await axios.get(APIURL+'get_post?category='+category)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
      console.log("error");
    });
    console.log(feedFetchData);
    setFeedList(feedFetchData);

    for (let i=0; i<feedFetchData.length; i++) {
      const postId = feedFetchData[i].id;
      const imageResponse = await axios.get(APIURL+'get_image?post_id='+postId, {
        responseType: 'arraybuffer'
      });
      const imageData = await Buffer.from(imageResponse.data, 'binary').toString('base64');
      const imageURI = await 'data:image/png;base64,' + imageData;
      console.log(postId);
      setFeedList(feedList => [
        ...feedList,
        feedList[i].imageURL = imageURI
      ]);
    }
  }

  useEffect(() => {
    fetchFeedData();
  }, []);

  useEffect(() => {
    if (feedList != null) {
      setFeedNum(feedList.length);
      const components = feedList.map((feed, index) =>{
        return (
          <View key={index+1}>
            <HobbyContent
              title={feed.title}
              content={feed.contents}
              imageURL={feed.imageURL}
            />
          </View>
        )});
      setFeedComponents(components);
      pager.current.setPage(activeIndex)
    }
  }, [feedList, feedNum])


  return (
    <View style={styles.container}>
      <FeedHeader
        category={category}
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
        {feedNum == 0 ? <Text style={styles.noticeText}>게시글이 없습니다.</Text> : <Text></Text>}
        <PagerView
          ref={pager}
          onPageSelected={({ nativeEvent }) => setActiveIndex(nativeEvent.position)}
          style={styles.viewPager} 
          initialPage={0}
          showPageIndicator={true}
        >
          {feedComponents}
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