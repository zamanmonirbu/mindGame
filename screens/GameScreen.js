import { View, Text, Button,StyleSheet, Alert } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import NumberContainer from "../component/NumberContainer";
import Card from "../component/Card";

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

  const [round,setRound]=useState(0)
  const currentLow=useRef(1);
  const currentHight=useRef(100)


const {userChoice,onGameOver}=props;
  useEffect(()=>{
    if(currentGuess===userChoice){
      console.log(round);
      onGameOver(round)
    }
  },[ currentGuess,userChoice,onGameOver])

  const handleNextGuessNumber=(direction)=>{
    console.log(currentGuess);
    if((direction==='lower' && currentGuess<props.userChoice)||(direction==='greater' && currentGuess>props.userChoice)){
      console.log(currentGuess);
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
    setRound(currRound=>currRound+1)
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
