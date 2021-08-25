import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function HobbyContent({ imageURL, title, content }) {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageURL}} style={styles.image}/>
      <Text style={styles.title}>제목 : {title}</Text>
      <Text style={styles.content}>내용: {content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  image: {
    width: 250,
    height: 250
  },
  title: {
    fontSize: 30
  },
  content: {
    fontSize: 20
  }
})