import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <Image 
     source={require('./src/crono.png')}
     />
     <Text style={styles.timer}>00:00:00</Text>

     <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>INICIAR</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.btn}>
          <Text style={styles.btnText}>PARAR</Text>
        </TouchableOpacity>
     </View>
     
     
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
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop:-170,
    fontSize:45,
    fontWeight: 'bold',
    color: '#fff'
  },
  btnArea:{
    flexDirection:'row',
    marginTop:130,
    height:40
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    height:50,
    margin:17,
    borderRadius:10

  },
  btnText:{

  }
});
