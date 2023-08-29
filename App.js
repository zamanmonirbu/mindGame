import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './component/Header';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [selectedNumber,setSelectedNumber]= useState()
const handleGameScreen=(selectNumber)=>{
  setSelectedNumber(selectNumber);
}

  let content= <StartGameScreen onStartGame={handleGameScreen} />
  if(selectedNumber){
    content=<GameScreen userChoice={selectedNumber} />
  }
  return (
    <View style={styles.screen}>
      <Header title={"Guess a Number"}/>
     {
      content
     }
    
    </View>
  );

  }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
   
  }
});



// rnfe 
//rnss