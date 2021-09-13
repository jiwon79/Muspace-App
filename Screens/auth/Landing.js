import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import ButtonModule from '../../components/atom/ButtonModule'
import { increase, decrease, setDiff } from '../../modules/counter';

export default function Landing({ navigation }) {
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }));
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MuSpace 로고</Text>
      <Text style={styles.title}>환영합니다!{'\n'}처음 오셨나요?</Text>
      <ButtonModule
        text="예"
        onPress={() => navigation.navigate("Register")}
        style={styles.registerButton}
      />
      <ButtonModule
        text="아니요"
        onPress={() => navigation.navigate("Login")}
        style={styles.loginButton}
      />

      <Button 
        title="title"
        onPress={onIncrease}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    marginTop: 40
  },
  logo: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 20
  },
  title: {
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50
  },
  registerButton: {
    alignSelf: 'center',
    marginBottom: 20
  },
  loginButton: {
    marginBottom: '30%'
  }
})