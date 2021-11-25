import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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

  titulo:{
    fontSize: 30,
    textalign: 'center',
    margintop: 15,
    color: '#800000'
  },
  
  campo:{
    backgroundColor '#FFA07B',
    textalign :'center',
    margintop: 15,
    color: '#8000000'
  },
  botao:{
    backgroundColor: '8000000'
    margin: 15,
    alignItems: 'center',
    padding: 10,
    borderradius: 20
  },
  
  textobotao{
    color: '#FFF',
    fontsize: 25
  },
});


