import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from './src/Input';
import {Navbar} from './src/Navbar'

export default function App() {
  return (
    <View>
      <Navbar title='TODO APPS'/>
      <View style={styles.block}>
        <Input/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  block: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
})