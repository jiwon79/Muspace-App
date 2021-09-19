import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Hoshi } from 'react-native-textinput-effects';

import ButtonModule from '../../components/atom/ButtonModule';

export default function FindID() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View>
      <Hoshi
        label={'성명'}
        borderColor={'#b76c94'}
        borderHeight={3}
        inputPadding={16}
        onChangeText={setName}
        style={styles.textInput}
      />

      <Hoshi
        label={'이메일'}
        borderColor={'#b76c94'}
        borderHeight={3}
        inputPadding={16}
        onChangeText={setEmail}
        style={styles.textInput}
      />

      <ButtonModule 
        text={'확인'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '5%'
  }
})
