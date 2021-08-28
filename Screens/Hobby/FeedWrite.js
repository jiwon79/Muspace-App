import React, { useState, useEffect } from 'react'
import { View, Text, Button, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons'; 

import HobbyContentWriteHeader from '../../components/Header/HobbyContentWriteHeader';
import ButtonModule from '../../components/atom/ButtonModule';
import { Platform } from 'react-native';

export default function FeedWrite({ navigation, route }) {
  console.log(Platform.OS);
  const hobby = route.params.hobby;
  const APIURL = 'http://1e14-121-152-26-223.ngrok.io/'
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [warning, setWarning] = useState('');

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

  const requestPermisison = async () => {
    const responseCamera = await Permissions.askAsync(Permissions.CAMERA);
    const responseMedia_library = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
      console.log(result)
      setWarning(result.uri);
    }
  };

  const submitContent = () => {
    if (title == '') {
      setWarning('제목을 입력해주세요!');
      return null;
    }
    if (contents == '')  {
      setWarning('내용을 입력해주세요!');
      return null;
    }
    if (image == null)  {
      setWarning('이미지를 넣어주세요');
      return null;
    }
    setWarning('');
    
    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = Platform.OS === 'android' ? image.uri : image.uri.replace('file://', '')
    let filename = localUri.split('/').pop();
    let imageType = image.type

    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    formData.append('file', { uri: localUri, name: filename, type: 'image/jpeg' });
    formData.append('category',hobby)
    formData.append('title', title)
    formData.append('contents', contents)
    console.log(formData)
    
    fetch('http://1e14-121-152-26-223.ngrok.io/post', {
      body: formData,
      method: 'POST',
      headers: {
        Accept: "application/json",
        "content-type": "multipart/form-data",
      }
    })
    .then(function (response) {
      console.log(JSON.stringify(response));
      setWarning(JSON.stringify(response));
      console.log('전송 완료')
    }).catch(function (error) {
      console.log(error);
      setWarning('네트워크 오류로 전송이 안되었습니다.')
    }).then(function() {
        console.log('end post')
    });

    // console.log(title)
    // console.log(contents)
    // console.log(image)
  }

  return (
    <View>
      <HobbyContentWriteHeader
        navigation={navigation}
        hobby={hobby}
      />
      {image ? 
        <Image 
          source={{ uri: image.uri }} 
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
      <Text style={styles.warningText}>{warning}</Text>
      <TextInput
        onChangeText={setTitle}
        value={title}
        returnKeyType="next"
        placeholder="제목"
        style={styles.titleInput}
      />
      <TextInput
        onChangeText={setContents}
        value={contents}
        placeholder="내용"
        style={styles.contentInput}
      />
      <ButtonModule
        text="Submit"
        onPress={() => submitContent()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
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
  warningText: {
    fontSize: 15,
    color: 'red',
    marginTop: 10,
    marginLeft: '8%',
    marginRight: '8%',
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
