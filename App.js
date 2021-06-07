import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from "./mystyle.js"
export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.column}>Column
      <View style={styles.innerbox}>Child</View>
      <View style={styles.innerbox}>Child</View>
      <View style={styles.innerbox}>Child</View>
    </View>
    <View style={styles.row}>Row
      <View style={styles.innerbox}>Child</View>
      <View style={styles.innerbox}>Child</View>
      <View style={styles.innerbox}>Child</View>
    </View>

      <StatusBar style="auto" />
    </View>
  );
}


