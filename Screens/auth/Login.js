import React from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import ButtonModule from '../../components/atom/ButtonModule';
import { login, logout } from '../../modules/login';

export default function Login({ route, navigation }) {
  const { logged } = useSelector(state => ({
    logged: state.login.logged
  }));
  const dispatch = useDispatch();
  const onLogin = () => dispatch(login());

  return (
    <View>
      <Text style={styles.title}>Login page</Text>
      <TextInput
        placeholder="name"
        style={styles.inputLogin}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        style={styles.inputPassword}
      />
      <ButtonModule
        text="login"
        onPress = {() => onLogin()}
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
  }
})