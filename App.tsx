import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState } from 'typesafe-actions';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
  },
});
