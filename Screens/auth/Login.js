import React, { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Alert, Modal, TouchableHighlight } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import ButtonModule from '../../components/atom/ButtonModule';
import { login } from '../../modules/login';

export default function Login({ route, navigation }) {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  const dispatch = useDispatch();
  const onLogin = () => dispatch(login());

  const loginAction = () => {
    if (userId === '') {
      setModalText('아이디를 입력해주세요.')
      setModalVisible(true);
    } else if (userPw === '') {
      setModalText('비밀번호를 입력해주세요.')
      setModalVisible(true);
    } else {
      onLogin();
    }
  }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalText}</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Text style={styles.title}>Login page</Text>
      <TextInput
        placeholder="id"
        onChangeText={setUserId}
        style={styles.inputLogin}
      />
      <TextInput
        placeholder="password"
        onChangeText={setUserPw}
        secureTextEntry={true}
        style={styles.inputPassword}
      />
      <ButtonModule
        text="login"
        onPress = {() => loginAction()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20
  },
  inputLogin: {
    marginLeft: '8%',
    marginRight: '8%',
    fontSize: 15,
    marginBottom: 15
  },
  inputPassword: {
    marginLeft: '8%',
    marginRight: '8%',
    fontSize: 15,
    marginBottom: 30
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})