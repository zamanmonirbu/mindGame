import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const GameOver = () => {
  return (
    <View style={styles.screen}>
      <Text>Game Is Over</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    screen:{
        textAlign:'center',
        flex:1,
        justifyContent:'center'
    }
})

export default GameOver