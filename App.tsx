import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
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
    <View style={styles.statusBarBackground}>
      <StatusBar backgroundColor='#1E243D' style='light'/>
      <SafeAreaView style={styles.container}>
        {loaded
        ?
          onlogged
          ?
          <MainBottomNav/>
          :
          <LandingNav/>
        :
          <Text>before load</Text>
        } 
      </SafeAreaView>
    </View>
  )
}
const headerHeight = 49;

const styles = StyleSheet.create({
  statusBarBackground: {
    backgroundColor: '#000',
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
    height: Platform.OS === 'ios' ? Constants.statusBarHeight + headerHeight : headerHeight,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
  },
  statusBar: {
    backgroundColor: '#000'
  }
});