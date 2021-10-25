import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {TouchableHighlight} from 'react-native-gesture-handler'
import EStyleSheet from 'react-native-extended-stylesheet'

import Category from "./Category";
import styleGuide from "../../../utils/styleGuide";
import Plus from './../../../assets/icon/Plus.svg'

const lifeCategoryList = ['취미', '음식', '여행', '책', '운동', '문화생활', '음악', '공부', '게임'];

export default function LifeCategory({ navigation }) {
  const hobbyComponents = lifeCategoryList.map((category, index) =>(
    <Category key={index} category={category} navigation={navigation}/>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <TouchableHighlight
          onPress={() => navigation.navigate('FeedWrite', '취미')}
          style={styles.button}
        >
          <View>
            <Plus/>
            <Text style={styleGuide.display_08}>새 게시물</Text>

          </View>
        </TouchableHighlight>
      </View>
      {hobbyComponents}
    </View>
  )
}

const lifeCategoryBottom = 182 - EStyleSheet.value('$screenHeight');
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: lifeCategoryBottom,
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    textAlign: 'center',
    color: '#fff'
  },
  buttonView: {
    width: '100%',
    marginBottom: 15
  },
  button: {
    borderWidth: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 85,
    height: 30,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 15,
  }
})