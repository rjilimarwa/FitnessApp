import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login';
import Signup from './src/Signup';
import Profile from './src/Profile';
import Today from './src/Today';
import Exercice from './src/Exercice';
export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
       <Signup/>
      <Profile/>
      <Today/>
     <Exercice/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
