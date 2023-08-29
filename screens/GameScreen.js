import { View, Text, Button,StyleSheet, Alert } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import NumberContainer from "../component/NumberContainer";
import Card from "../component/Card";
import GameOver from "./GameOver";

const generateRandomBetween = (minNo, maxNo, exclude) => {
  const min = Math.ceil(minNo);
  const max = Math.floor(maxNo);
  const ranNum = Math.floor(Math.random() * (max - min) + min);
  if (exclude === ranNum) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return ranNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess,setCurrentGuess]=useState(generateRandomBetween(1,100,props.userChoice))

  const currentLow=useRef(1);
  const currentHight=useRef(100)

  useEffect(()=>{
    if(currentGuess===props.userChoice){
      <GameOver/>
    }
  })

  const handleNextGuessNumber=(direction)=>{
    if((direction==='lower' && currentGuess<props.userChoice)||direction==='greater' && currentGuess>props.userChoice){
      Alert.alert("Don't Lie!","You Know this is wrong",[{text:'Sorry', style:'cancel'}])
    return
    }
    if(direction==='lower'){
     currentHight.current=currentGuess;
    }
    else{
      currentLow.current=currentGuess;
    }
    const nextNumber=generateRandomBetween(currentLow.current,currentHight.current,currentGuess);
    setCurrentGuess(nextNumber)
  }
  
  return (
    <View style={styles.screen}> 
 
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="Lower" onPress={handleNextGuessNumber.bind(this,'lower')} />
        <Button title="Greater" onPress={handleNextGuessNumber.bind(this,'greater')} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex:1,
    padding:10,
    alignItems:'center'
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
    width:300,
    maxWidth:'80%'   

  }
})

export default GameScreen;
