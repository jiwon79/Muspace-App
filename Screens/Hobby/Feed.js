import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PagerView from 'react-native-pager-view';
import { AntDesign } from '@expo/vector-icons'; 
import axios from "axios";
import Base64ArrayBuffer from 'base64-arraybuffer';
import Base64 from 'Base64'

import HobbyFeedHeader from '../../components/Header/HobbyFeedHeader';
import HobbyContent from '../../components/HobbyContent';

export default function Feed({ navigation, route }) {
  const hobby = route.params.hobby;
  const APIURL = 'http://1e14-121-152-26-223.ngrok.io/';

  const [activeIndex, setActiveIndex] = useState(0);
  const [feedList, setFeedList] = useState(null);
  const pager = useRef(0);
  // api 받을 때 갯수 세서 넣어줘야됨
  const [feedNum, setFeedNum] = useState(0);
  const [feedComponents, setFeedComponents] = useState(null);


  const imageFetchData = async (id) => {
    return axios.get(APIURL+'get_image?post_id='+id, {
      responseType: 'arraybuffer'
    })
    .then(response => {
      const base64 = Base64.btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          '',
        ),
      );
      console.log(base64)
      return ("data:image/png;base64," + base64);
    });
    // return imageResponse
  }

  const fetchFeedData = async () => {
    const feedFetchData = await axios.get(APIURL+'get_post?category='+hobby)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
      console.log("error");
    });


    console.log('start')
    console.log(feedFetchData)
    const feedModifyData = feedFetchData.map((feed) => {
      const imageURI = axios.get(APIURL+'get_image?post_id='+feed.id, {
        responseType: 'arraybuffer'
      })
      .then(response => {
        const base64 = Base64.btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),'',
          ),
        );
        return ("data:image/png;base64," + base64);
      });
      console.log(imageURI);
      // console.log('image uri')
      // console.log(imageURI._W)
      return ({
        ...feed,
        imageURL: 'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg'
        // imageURL: imageURI
      })
    })
    console.log('end')
    console.log(feedModifyData)
    setFeedList(feedModifyData)
  }

  useEffect(() => {
    fetchFeedData();
  }, []);

  useEffect(() => {
    if (feedList != null) {
      setFeedNum(feedList.length);
      const components = feedList.map((feed, index) =>{
        console.log(feed)
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