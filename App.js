import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './component/Header';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState()
  const [guessRound,setGuessRound]=useState(0)

  const handleGameScreen = (selectNumber) => {
    setSelectedNumber(selectNumber);
    setGuessRound(0)
  }
  const gameOverHandler=(numberOfRounds)=>{
    setGuessRound(numberOfRounds)
  }

  let content = <StartGameScreen onStartGame={handleGameScreen} />
  if (selectedNumber && guessRound<=0) {
    content = <GameScreen userChoice={selectedNumber} onOverGame={()=>gameOverHandler()} />
  }
  else if(guessRound>0){
    content=<GameOver/>
  }
  return (
    <View style={styles.screen}>
      <Header title={"Guess a Number"} />
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