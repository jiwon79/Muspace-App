import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PagerView from 'react-native-pager-view';
import HobbyFeedHeader from '../../components/Header/HobbyFeedHeader';
import HobbyContent from '../../components/HobbyContent';

export default function Feed({ navigation, route }) {
  console.log(route)
  const hobby = route.params.hobby;

  return (
    <View style={styles.container}>
      <HobbyFeedHeader 
        hobby={hobby}
        navigation={navigation}
      />
      <PagerView style={styles.viewPager} initialPage={1}>
        <View key="1">
          <HobbyContent
            imageURL='https://reactjs.org/logo-og.png'
            title='제목제목'
            content='내용내용'
          />
        </View>
        <View key="2">
          <HobbyContent
            imageURL='https://reactjs.org/logo-og.png'
            title='제목제목'
            content='내용내용'
          />
        </View>
        <View key="3">
          <HobbyContent
            imageURL='https://reactjs.org/logo-og.png'
            title='제목제목'
            content='내용내용'
          />
        </View>
      </PagerView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewPager: {
    flex: 1,
  }
});