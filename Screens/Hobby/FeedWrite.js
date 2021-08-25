import React, { useState, useEffect } from 'react'
import { View, Text, Button, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import HobbyContentWriteHeader from '../../components/Header/HobbyContentWriteHeader';

export default function FeedWrite({ navigation, route }) {
  const hobby = route.params.hobby;
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const requestPermisison = async () => {
    const responseCamera = await Permissions.askAsync(Permissions.CAMERA);
    console.log(responseCamera);
    const responseMedia_library = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    console.log(responseMedia_library);

  };

  useEffect(() => {
    (async () => {
      requestPermisison();
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View>
      <HobbyContentWriteHeader
        navigation={navigation}
        hobby={hobby}
      />
      <Text style={styles.text}>feed write</Text>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

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
