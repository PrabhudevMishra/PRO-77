import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginSignUpScreen from './screens/loginSignUpScreen';

export default class App extends React.Component() {
  render(){
  return (
    <LoginSignUpScreen/>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
