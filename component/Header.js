import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Color from '../constant/Color';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle} >{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
      width:'100%',
      height:90,
      paddingTop:36,
      backgroundColor: Color.primary,
      alignItems:'center'
      
  },
  headerTitle:{
      color:'black',
      fontSize: 18
  }
  
})

export default Header