import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import axios from "axios";

export default function FeedContent({feed}) {
  const APIURL = 'http://1e14-121-152-26-223.ngrok.io/';
  const postId = feed.id;


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

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(feed)}</Text>
      <Text>{postId}</Text>
      {/*<Image source={{uri: imageURL}} style={styles.image}/>*/}
      {/*<Text style={styles.title}>제목 : {title}</Text>*/}
      {/*<Text style={styles.content}>내용: {content}</Text>*/}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    margin: 30,
    borderWidth: 1,
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 20
  },
  title: {
    marginTop: 15,
    fontSize: 30
  },
  content: {
    marginTop: 10,
    fontSize: 20
  }
})