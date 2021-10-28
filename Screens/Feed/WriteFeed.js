import React, { useState, useEffect, version } from 'react'
import { View, Text, Button, Image, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons'; 
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';
import { Platform } from 'react-native';

import InputImageHeader from "../../components/Feed/WriteFeed/InputImageHeader";
import WriteFeedHeader from '../../components/Feed/WriteFeed/WriteFeedHeader';
import ButtonModule from '../../components/atom/ButtonModule';
import CameraButton from "../../components/Feed/WriteFeed/Button/CameraButton";
import GalleryButton from "../../components/Feed/WriteFeed/Button/GalleryButton";

export default function WriteFeed({ navigation, route }) {
  // const hobby = route.params.hobby;
  const hobby = '취미';
  const APIURL = 'http://1e14-121-152-26-223.ngrok.io/';

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [warning, setWarning] = useState('');
  const [loadingAnim, setLoadingAnim] = useState(false);

  useEffect(() => {
    (async () => {
      await requestPermission();
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const requestPermission = async () => {
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
    setLoadingAnim(true);
    
    let localUri = Platform.OS === 'android' ? image.uri : image.uri.replace('file://', '')
    let filename = localUri.split('/').pop();

    let formData = new FormData();
    formData.append('file', { uri: localUri, name: filename, type: 'image/jpeg' });
    formData.append('category',hobby)
    formData.append('title', title)
    formData.append('contents', contents)
    console.log(formData)
    
    fetch(APIURL+'post', {
      body: formData,
      method: 'POST',
      headers: {
        Accept: "application/json",
        "content-type": "multipart/form-data",
      }
    })
    .then(function (response) {
      console.log(JSON.stringify(response));
      setLoadingAnim(false);
      console.log('전송 완료')
      navigation.goBack();
    }).catch(function (error) {
      console.log(error);
      setLoadingAnim(false);
      setWarning('네트워크 오류로 전송을 하지 못했습니다.')
    })
  }

  return (
    <View>
      <InputImageHeader/>
      <WriteFeedHeader
        navigation={navigation}
        hobby={hobby}
      />
      <CameraButton/>
      <GalleryButton/>
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
      {loadingAnim ? <View style={styles.loadingBack}></View> : <View></View>}
      
      <ActivityIndicator 
        size="large" 
        animating={loadingAnim} 
        color="#1D79D3"
        style={styles.loadingAnim}
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
  },
  loadingAnim: {
    position: 'absolute',
    alignSelf: 'center',
    top: vh(50)
  },
  loadingBack: {
    position: 'absolute',
    backgroundColor: '#000000',
    opacity: 0.3,
    width: '100%',
    height: vh(100)
  }
})
