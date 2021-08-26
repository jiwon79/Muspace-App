import React, { useState, useEffect } from 'react'
import { View, Text, Button, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons'; 

import HobbyContentWriteHeader from '../../components/Header/HobbyContentWriteHeader';
import ButtonModule from '../../components/atom/ButtonModule';

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
      {image ? 
        <Image 
          source={{ uri: image }} 
          style={styles.image} 
        />
        :
        <TouchableOpacity 
          onPress={pickImage}
          style={styles.pickImageButton}
        >
          <FontAwesome name="plus" style={styles.imageButtonIcon} />
        </TouchableOpacity>
      }

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
      <ButtonModule
        text="Submit"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  pickImageButton: {
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: 'center'
  },
  imageButtonIcon: {
    textAlign: 'center',
    fontSize: 24,
    color: '#000'
  },
  text: {
    textAlign: 'center'
  },
  titleInput: {
    height: 40,
    marginLeft: '8%',
    marginRight: '8%',
    borderBottomWidth: 1,
    fontSize: 20
  },
  contentInput: {
    height: 40,
    marginLeft: '8%',
    marginRight: '8%',
    marginBottom: 30,
    fontSize: 20,
  }
})
