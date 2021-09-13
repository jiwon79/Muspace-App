import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import rootReducer from './modules';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import LandingNav from './Navigations/LandingNav';
import MainBottomNav from './Navigations/MainBottomNav';

export default function App() {
  const [logged, setLogged] = useState<boolean>(false);
  const store = createStore(
    rootReducer,
    composeWithDevTools()
  );
  console.log(store.getState());
  
  const handleLogged = () => {
    setLogged(!logged);
  }

  if (!logged) {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <LandingNav handleLogged={handleLogged}/>
        </SafeAreaView>
      </Provider>
      );
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MainBottomNav/>
        {/* <Button
          title="logout button"
          onPress = {() => handleLogged()}
        /> */}
      </SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
  },
});
