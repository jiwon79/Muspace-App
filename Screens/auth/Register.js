import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Hoshi } from 'react-native-textinput-effects';

import ButtonModule from '../../components/atom/ButtonModule';

export default function Register() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const registerUserInfo = () => {
    console.log(userId, userPw, userName, userEmail)
  }

  return (
    <View>
      <Hoshi
        label={'아이디'}
        borderColor={'#b76c94'}
        borderHeight={3}
        inputPadding={16}
        onChangeText={setUserId}
        style={styles.textInput}
      />

      <Hoshi
        label={'비밀번호'}
        borderColor={'#b76c94'}
        borderHeight={3}
        inputPadding={16}
        onChangeText={setUserPw}
        style={styles.textInput}
      />

      <Hoshi
        label={'성명'}
        borderColor={'#b76c94'}
        borderHeight={3}
        inputPadding={16}
        onChangeText={setUserName}
        style={styles.textInput}
      />

      <Hoshi
        label={'이메일'}
        borderColor={'#b76c94'}
        borderHeight={3}
        inputPadding={16}
        onChangeText={setUserEmail}
        style={styles.textInput}
      />

      <ButtonModule
        text="완료"
        onPress={() => registerUserInfo()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20
  },
  textInput: {
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '5%'
  }
})
