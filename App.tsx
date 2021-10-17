import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import Constants from 'expo-constants';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState } from 'typesafe-actions';
import { useFonts } from 'expo-font'

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

export function App() {
  const { onlogged } = useSelector((state: RootState) => ({
    onlogged: state.userInfo.logged
  }));
  
  const [loaded] = useFonts({
    NotoSansKR: require('./assets/fonts/NotoSansKR.otf'),
    'NotoSansKR-Bold': require('./assets/fonts/NotoSansKR-Bold.otf'),
    'NotoSansKR-Light': require('./assets/fonts/NotoSansKR-Light.otf')
  })
  
  return (
    <>
    {loaded
    ?
      onlogged
      ?
      <SafeAreaView style={styles.container}>
        <MainBottomNav/>
      </SafeAreaView>
      :
      <SafeAreaView style={styles.container}>
        <LandingNav/>
      </SafeAreaView>
      
    :
      <SafeAreaView style={styles.container}>
        <Text>before load</Text>
      </SafeAreaView>
    } 
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
  },
});