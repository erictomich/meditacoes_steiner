import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, ScrollView, View, Alert, TouchableOpacity } from 'react-native';
import Semana from './Semana'


export default function App() {
  return (
    <View  style={styles.container}>
	  <View style={{backgroundColor: '#E6AA68', paddingBottom: 10, marginBottom: 5}}>
	    <Text style={styles.titulo}>Meditações para {"\n"}os dias da semana</Text>
		<Text style={styles.autor}>Rudolf Steiner</Text>
	  </View>
     
	  <ScrollView >
		<Semana /> 
	  </ScrollView >
	  
	  <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECE4B7'
  //  alignItems: 'center',
   // justifyContent: 'center',
  },
  titulo: {
	color: '#3F5E31',
    fontWeight: 'bold',
    fontSize: 30,
	paddingTop: 50,
	paddingLeft: 10,
	paddingRight: 10,
	textAlign: 'center'
  },
  autor: {
	color: '#444444',
    fontWeight: 'bold',
    fontSize: 20,
	textAlign: 'center'
  }
});
