import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
function enviar(){
  alert('você clicou no botão');
}
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>segundo aplicativo</Text>
      <textinput style={styles.campo}></textinput>
      <touchableopacity style={styles.botao} onpress={enviar}>
        </touchableopacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  titulo:{
    fontSize: 30,
    textalign: 'center',
    margintop: 15,
    color: '#800000'
  },
  
  campo:{
    backgroundColor: '#FFA07A',
    textalign :'center',
    margintop: 15,
    color: '#8000000'
  },
  botao:{
    backgroundColor: '8000000',
    margin: 15,
    alignItems: 'center',
    padding: 10,
    borderradius: 20
  },
  
  textobotao:{
    color: '#FFF',
    fontsize: 25
  },
});


