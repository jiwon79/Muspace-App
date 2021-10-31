import React, {useEffect} from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from "react-redux";

import {getImage} from "../../../modules/categoryFeed";

export default function FeedContent({feed}) {
  const imageList = useSelector(state => state.categoryFeed.images);
  const findById = (image) => {
    return image.id === feed.id
  }
  const image = imageList.find(findById);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImage(feed.id));
  }, [dispatch])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>제목 : {feed.title}</Text>
      <Text style={styles.content}>내용: {feed.contents}</Text>
      {
        image === undefined
          ? <Text>undefined</Text>
          : image.loading
          ? <Text>loading...</Text>
          : <Image source={{uri: image.uri}} style={styles.image}/>
      }
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