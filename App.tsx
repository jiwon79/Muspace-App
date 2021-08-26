import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Button } from 'react-native';
import Constants from 'expo-constants';

import LandingNav from './Navigations/LandingNav';
import MainBottomNav from './Navigations/MainBottomNav';

export default function App() {
  const [logged, setLogged] = useState<boolean>(false);
  
  const handleLogged = () => {
    setLogged(!logged);
  }

  if (!logged) {
    return (
      <SafeAreaView style={styles.container}>
        <LandingNav handleLogged={handleLogged}/>
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
