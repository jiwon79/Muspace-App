import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Constants from 'expo-constants';

import LandingScreen from './Screens/auth/Landing';
import RegisterScreen from './Screens/auth/Register';
import LoginScreen from './Screens/auth/Login';

import MySpace from './Screens/MySpace';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [logged, setLogged] = useState(true);

  const handleLogged = () => {
    console.log(logged);
    setLogged(!logged);
  }

  if (!logged) {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen 
              name="Landing" 
              component={LandingScreen}
              option={{
                headerShown: false
              }}  
            />
            <Stack.Screen 
              name="Register" 
              component={RegisterScreen}
            />
            <Stack.Screen 
              name="Login" 
              component={LoginScreen}
              initialParams={{handleLogged}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator 
        initialRouteName="MySpace"
        screenOptions={{
          headerShown: false
        }}>
          <Tab.Screen 
          name="MySpace" 
          component={MySpace}
          />
        </Tab.Navigator>
      </NavigationContainer>
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
