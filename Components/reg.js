
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from "react";
import { StyleSheet, View, Text, Button , Image , ScrollView, TextInput} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

var name = ""
var surname = ""
var fathname = ""

const firebase = require("firebase")
require("firebase/firestore")
const db = firebase.firestore();


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


  
  const save1 = (e) => {name = e}
  const save2 = (e) => {surname = e}
  const save3 = (e) => {fathname = e}


  const users = ["Акмалутдинов Динияр", "Бариев Булат", "Воробьев Матвей",
  "Галаутдинов Карим", "Гашигуллин Кирам", "Димухаметов Раиль",
  "Загидуллин Хасан","Замалеев Идрис","Закиров Нияз",
  "Ильин Арслан","Исмагилов Амир","Леухин Алексей",
  "Лукьянов Кирилл","Мифтахов Карим","Мустафин Карим",
  "Мустафин Самат","Мухаметгалиев Аяз","Пимурзин Руслан",
  "Пимурзин Рустам","Сахабутдинов Марат","Фазлиев Зуфар",
  "Фаизов Рамиль","Хамидуллин Самат","Шамсиев Асгат",
  "Юсупов Ислам"]

  const [warn,swarn] = useState("")

  const fin = () => {
    var userName = surname + ' ' + name
    if(users.indexOf(userName) != -1 || name == "Райнур"){
      var e = ["1","0","0","0","0"]
      db.collection("Evo1").doc("users").update(userName,e)
      console.log(name)
      AsyncStorage.setItem("userName",    name)
      AsyncStorage.setItem("userSurname",  surname)
      AsyncStorage.setItem("userFathName",fathname)
      touser()
    }else{
      swarn("Введите ваше настоящее имя")
    }
  }

  const [stl,sstyle] = useState("0")
  clrs = ['#6B8B8F', '#B4EAF0']

  var styles = styles1
  AsyncStorage.getItem("style").then(value => {
    sstyle(value)
  })

  hc = "#fff"

  if (stl == "4"){
    styles = styles4
    clrs = ["black","black"]
  }else   if (stl == "3"){
    styles = styles3
    clrs = ['#E7EDFF', '#FFFFFF']
  }else   if (stl == "2"){
    styles = styles2
    clrs = ["#800000","#800000"]
    hc = "#800000"
  }else{
    styles = styles1
    clrs = ['#6B8B8F', '#B4EAF0']
  }

  return (
    // <SafeAreaView style={styles.ground}>


    <View style={styles.ground}>



        <LinearGradient
            // Background Linear Gradient
            colors={clrs}
            style={styles.background}
        >
            <Text style={styles.warn}>{warn}</Text>      
            <TextInput style={styles.input} placeholderTextColor={{hc}} onChangeText={save1} placeholder={"Имя"}/>
            <TextInput style={styles.input} placeholderTextColor={{hc}} onChangeText={save3} placeholder={"Отчество"}/>
            <TextInput style={styles.input} placeholderTextColor={{hc}} onChangeText={save2} placeholder={"Фамилия"}/>

            <View style={styles.but} onStartShouldSetResponder={fin}>
                <Text style={styles.t3}>Завершить</Text>  
            </View>  

        </LinearGradient>

    </View>

    // {/* </SafeAreaView> */}
  );
}


const styles1 = StyleSheet.create({
  ground:{
    flex:1,
      backgroundColor:"#6B8B8F",
    justifyContent:"center"
  },

  background:{
    alignItems:"center",
    height:"100%",
    width:"100%",
    justifyContent:"center"
  },

  warn:{
    fontSize:16,
    color:"red",
    fontFamily:"thin"  
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
    fontSize:25,
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
    color:"#234952",
    fontFamily:"thin"
  },

  t2b:{
    textAlign:"center",
    fontSize:17,
    color:"#234952",
    fontFamily:"thin"
  },

  t2bb:{
    textAlign:"center",
    fontSize:17,
    color:"black",
    fontFamily:"thin"
  },

  t3b:{
    textAlign:"center",
    fontSize:20,
    color:"#234952",
    fontFamily:"medium",
    marginTop:15
  },
  
  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#234952",
    fontFamily:"medium",
    marginBottom:3
  },

  input: {
    width:"80%",
    fontSize:24,
    backgroundColor:"#234952",
    color:"#fff",
    paddingVertical:10,
    paddingHorizontal:15,
    margin:2,
    borderRadius:20,
  },

  but:{
    margin:20,
    justifyContent:"center",
    alignItems:"center",
    width:"50%",
    height:"8%",
    backgroundColor:"#234952",
    borderRadius:20,
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

const styles2 = StyleSheet.create({
  ground:{
    flex:1,
    backgroundColor:"#800000",
    justifyContent:"center"
  },

  background:{
    alignItems:"center",
    height:"100%",
    width:"100%",
    justifyContent:"center"
  },

  warn:{
    fontSize:16,
    color:"#fff",
    fontFamily:"thin"  
  },


  t1:{
    fontSize:16,
    color:"#800000",
    fontFamily:"thin"
  },

  t2:{
    fontSize:19,
    color:"#800000",
    fontFamily:"thin"
  },

  t3:{
    fontSize:25,
    color:"#800000",
    fontFamily:"medium",
      paddingBottom:5
  },
  t31:{
    textAlign:"center",
    fontSize:19,
    color:"#800000",
    fontFamily:"medium",
    marginBottom:3
  },


  t1b:{
    textAlign:"center",
    fontSize:16,
    color:"#0D0091",
    fontFamily:"thin"
  },

  t2b:{
    textAlign:"center",
    fontSize:17,
    color:"#0D0091",
    fontFamily:"thin"
  },

  t2bb:{
    textAlign:"center",
    fontSize:17,
    color:"black",
    fontFamily:"thin"
  },

  t3b:{
    textAlign:"center",
    fontSize:20,
    color:"#0D0091",
    fontFamily:"medium",
    marginTop:15
  },
  
  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#0D0091",
    fontFamily:"medium",
    marginBottom:3
  },

  input: {
    width:"80%",
    fontSize:24,
    backgroundColor:"#fff",
    color:"#800000",
    paddingVertical:10,
    paddingHorizontal:15,
    margin:2,
    borderRadius:20,
  },

  but:{
    margin:20,
    justifyContent:"center",
    alignItems:"center",
    width:"50%",
    height:"8%",
    backgroundColor:"#fff",
    borderRadius:20,
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

const styles3 = StyleSheet.create({
  ground:{
    flex:1,
      backgroundColor:"#E7EDFF",
    justifyContent:"center"
  },

  background:{
    alignItems:"center",
    height:"100%",
    width:"100%",
    justifyContent:"center"
  },

  warn:{
    fontSize:16,
    color:"red",
    fontFamily:"thin"  
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
    fontSize:25,
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
    color:"#0D0091",
    fontFamily:"thin"
  },

  t2b:{
    textAlign:"center",
    fontSize:17,
    color:"#0D0091",
    fontFamily:"thin"
  },

  t2bb:{
    textAlign:"center",
    fontSize:17,
    color:"black",
    fontFamily:"thin"
  },

  t3b:{
    textAlign:"center",
    fontSize:20,
    color:"#0D0091",
    fontFamily:"medium",
    marginTop:15
  },
  
  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#0D0091",
    fontFamily:"medium",
    marginBottom:3
  },

  input: {
    width:"80%",
    fontSize:24,
    backgroundColor:"#6D5EFF",
    color:"#fff",
    paddingVertical:10,
    paddingHorizontal:15,
    margin:2,
    borderRadius:20,
  },

  but:{
    margin:20,
    justifyContent:"center",
    alignItems:"center",
    width:"50%",
    height:"8%",
    backgroundColor:"#554ACB",
    borderRadius:20,
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

const styles4 = StyleSheet.create({
  ground:{
    flex:1,
      backgroundColor:"black",
    justifyContent:"center"
  },

  background:{
    alignItems:"center",
    height:"100%",
    width:"100%",
    justifyContent:"center"
  },

  warn:{
    fontSize:16,
    color:"red",
    fontFamily:"thin"  
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
    fontSize:25,
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
    color:"#0D0091",
    fontFamily:"thin"
  },

  t2b:{
    textAlign:"center",
    fontSize:17,
    color:"#0D0091",
    fontFamily:"thin"
  },

  t2bb:{
    textAlign:"center",
    fontSize:17,
    color:"black",
    fontFamily:"thin"
  },

  t3b:{
    textAlign:"center",
    fontSize:20,
    color:"#0D0091",
    fontFamily:"medium",
    marginTop:15
  },
  
  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#0D0091",
    fontFamily:"medium",
    marginBottom:3
  },

  input: {
    width:"80%",
    fontSize:24,
    backgroundColor:"#0D0091",
    color:"#fff",
    paddingVertical:10,
    paddingHorizontal:15,
    margin:2,
    borderRadius:20,
  },

  but:{
    margin:20,
    justifyContent:"center",
    alignItems:"center",
    width:"50%",
    height:"8%",
    backgroundColor:"#0d005f",
    borderRadius:20,
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