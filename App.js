import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';

const Stack = createStackNavigator();

export default function App() {
  const [logged, setLogged] = useState(false);

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
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <View>
        <Text>Logged</Text>
        <Button
          title="logout button"
          onPress = {() => handleLogged()}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
