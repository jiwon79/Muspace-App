import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

export default function InPlanetIcons() {
  return (
    <View style={styles.contianer}>
      <View style={styles.iconContainer}>
        <Text style={styles.text}>캘린더</Text>
        <AntDesign name="calendar" style={styles.icon}/>
      </View>
      
      <View style={styles.iconContainer}>
        <Text style={styles.text}>플레이리스트</Text>
        <MaterialCommunityIcons name="file-document-outline" style={styles.icon} />
      </View>
      
      <View style={styles.iconContainer}>
        <Text style={styles.text}>발자국</Text>
        <Foundation name="foot" style={styles.icon} />
      </View>

      <View style={styles.iconContainer}>
        <Text style={styles.text}>편집</Text>
        <AntDesign name="edit" style={styles.icon} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contianer: {
    position: 'absolute',
    top: '10%',
    width: '90%',
    marginTop: '8%',
    marginLeft: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconContainer: {
    flexDirection: 'column',
    margin: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 12
  },
  icon: {
    textAlign: 'center',
    fontSize: 40,
    color: 'black'
  }
})
