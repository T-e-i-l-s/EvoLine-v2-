
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from "react";
import { StyleSheet, View, Text, Button , Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';



export default function App({navigation}) {


  const tohome = () => {
     navigation.navigate("home")
  }

  const tohw = () => {
    navigation.navigate("hw")
  }

  const touser = () => {
    navigation.navigate("user")
  }

  const toset = () => {
    navigation.navigate("settings")
  }

  const todez = () => {
    navigation.navigate("dez")
  }

  return (
    <SafeAreaView style={styles.ground}>


    {/* <View style={styles.ground}> */}

      <LinearGradient
        // Background Linear Gradient
          colors={['#5C49C9', '#462FB1']}
        style={styles.background}
      >


      </LinearGradient>

    {/* </View> */}

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  ground:{
    flex:1,
      backgroundColor:"#5C49C9",
    justifyContent:"flex-end"
  },

  background:{
    alignItems:"center",
    height:"100%",
    width:"100%",
    justifyContent:"flex-end"
  },

  t1:{
    fontSize:16,
    color:"#fff",
    fontFamily:"thin"
  },

  t2:{
    fontSize:19,
    color:"#fff",
    fontFamily:"thin"
  },

  t3:{
    fontSize:22,
    color:"#fff",
    fontFamily:"medium",
      paddingBottom:5
  },
  t31:{
    textAlign:"center",
    fontSize:19,
    color:"#fff",
    fontFamily:"medium",
    marginBottom:3
  },


  t1b:{
    textAlign:"center",
    fontSize:16,
    color:"black",
    fontFamily:"thin"
  },

  t2b:{
      textAlign:"center",
    fontSize:17,
    color:"black",
    fontFamily:"thin"
  },

  t3b:{
      textAlign:"center",
    fontSize:20,
    color:"black",
    fontFamily:"medium",
    marginBottom:3
  },

  header:{
    alignItems:"flex-start",
    justifyContent:"center",
      width:"97%",
      padding:15
  },

  name:{
    borderRadius:40,
  },

  title:{
    alignItems:"center",
    justifyContent:"center",
    width:"97%",
    height:"8%",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
      backgroundColor:"#5350D5"
  },
  dayline:{
    alignItems:"center",
    justifyContent:"center",
    width:"97%",
    height:"5%",
      backgroundColor:"#5D68E3",
    flexDirection:"row"
  },
  l1:{
    alignItems:"center",
    justifyContent:"center",
    width:"97%",
    height:"5%",
    backgroundColor:"#D6D6D6",
  },
  l2:{
    alignItems:"center",
    justifyContent:"center",
    width:"97%",
    height:"5%",
    backgroundColor:"#ddd",
  },
  myhw:{
    alignItems:"center",
    justifyContent:"center",
    width:"97%",
    height:"8%",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
      backgroundColor:"#5350D5"
  },

  down1:{
     alignItems:"center",
     justifyContent:"center",
     width:"97%",
      height:"13%",
      flexDirection:"row",
      margin:15
  },

  block:{
      textAlign:"center",
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#5350D5",
      margin:7,
      width:"47%",
      borderRadius:20,
      padding:50,
      height:"100%"
  },

  movedown:{
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#5350D5",
    marginBottom:7,
    borderRadius:250,
    padding:9,
    color:"#fff",
    fontSize:16,
    fontFamily:"medium",
  },


  navpan:{
    alignItems:"center",
    width:"100%",
    height:50,
    flexDirection:"row"
  },
  anavbut:{
    alignItems:"center",
    justifyContent:"center",
    //backgroundColor:"#D6D6D6",
    height:"100%",
    width:"34%",
  },
  navbut1:{
    //backgroundColor:"#ddd",
    height:"100%",
    width:"34%",
    alignItems:"center",
    justifyContent:"center",
  },
  navbut2:{
    height:"100%",
    width:"100%",
    textAlign:"center"
  },

  img:{
    height:30,
    width:30,
  },

  gnd:{
    height:"100%",
    width:"100%",
  }

});