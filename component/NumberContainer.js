import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../constant/Color'

export default function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        borderWidth:2,
        borderColor: Color.accent,
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center'
    },
    number:{
        color:Color.accent,
        fontSize:22
    }
})