import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import HobbyContentWriteHeader from '../../components/Header/HobbyContentWriteHeader';

export default function FeedWrite({ navigation, route }) {
  const hobby = route.params.hobby;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View>
      <HobbyContentWriteHeader
        navigation={navigation}
        hobby={hobby}
      />
      <Text style={styles.text}>feed write</Text>
      <TextInput
        onChangeText={setTitle}
        value={title}
        returnKeyType="next"
        placeholder="제목"
        style={styles.titleInput}
      />
      <TextInput
        onChangeText={setContent}
        value={content}
        placeholder="내용"
        style={styles.contentInput}
      />
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: {
    textAlign: 'center'
  },
  titleInput: {
    fontSize: 25
  },
  contentInput: {
    fontSize: 20
  },
  submitButton: {
    width: '40%',
    height: 30,
    backgroundColor: '#eeaadd'
  }
})
