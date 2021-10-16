import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState } from 'typesafe-actions';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Font from 'expo-font';

import rootReducer from './modules';
import LandingNav from './Navigations/LandingNav';
import MainBottomNav from './Navigations/MainBottomNav';

export default function AppWrapper() {
  const store = createStore(
    rootReducer,
    composeWithDevTools()
  );

  console.log(store.getState());
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

Font.loadAsync({
  NotoSansKR: require('./assets/fonts/NotoSansKR.otf'),
  'NotoSansKR-Bold': require('./assets/fonts/NotoSansKR-Bold.otf'),
  'NotoSansKR-Light': require('./assets/fonts/NotoSansKR-Light.otf')
})

export function App() {
  const { onlogged } = useSelector((state: RootState) => ({
    onlogged: state.userInfo.logged
  }));
  console.log(onlogged);

  if (!onlogged) {
    return (
      <SafeAreaView style={styles.container}>
        <LandingNav/>
      </SafeAreaView>
      );
  }

  return (
    <SafeAreaView style={styles.container}>
      <MainBottomNav/>
      {/* <Button
        title="logout button"
        onPress = {() => handleLogged()}
      /> */}
    </SafeAreaView>
  )
}

EStyleSheet.build({
  $screenWidth: Dimensions.get('window').width
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
  },
});