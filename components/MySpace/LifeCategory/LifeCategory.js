import React from 'react'
import { View, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Category from "./Category";

const lifeCategoryList = ['취미', '음식', '여행', '책', '운동', '문화생활', '음악', '공부', '게임'];

export default function LifeCategory({ navigation }) {
  const hobbyComponents = lifeCategoryList.map((category, index) =>(
    <Category key={index} category={category} navigation={navigation}/>
  ));

  return (
    <View style={styles.container}>
      {hobbyComponents}
    </View>
  )
}


const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '182-$screenHeight',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    textAlign: 'center'
  }
})