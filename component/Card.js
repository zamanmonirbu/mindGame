import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card(props) {
  return (
    <View style={{...styles.card, ...props.style}}>
      {props.children}
    </View>
  );
};
const styles = StyleSheet.create({
    card:{        
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:.20,
        elevation:30,
        backgroundColor: 'white',
        padding:20,
    }
})