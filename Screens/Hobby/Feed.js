import React from 'react'
import { View, Text } from 'react-native'

import HobbyFeedHeader from '../../components/Header/HobbyFeedHeader';
import HobbyContent from '../../components/HobbyContent';

export default function Feed({ navigation, route }) {
  console.log(route)
  const hobby = route.params.hobby;

  return (
    <View>
      <HobbyFeedHeader 
        hobby={hobby}
        navigation={navigation}
      />
      <HobbyContent
        imageURL='https://reactjs.org/logo-og.png'
        title='제목제목'
        content='내용내용'
      />
    </View>
  )
}
