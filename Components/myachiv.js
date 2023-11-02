
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from "react";
import { StyleSheet, View, Text, Button , Image, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

AsyncStorage.setItem('m1','1')
AsyncStorage.setItem('m3','1')
AsyncStorage.setItem('m4','1')

var ref1 = require("../assets/medals/ques.png")
var ref2 = require("../assets/medals/ques.png")
var ref3 = require("../assets/medals/ques.png")
var ref4 = require("../assets/medals/ques.png")
var ref5 = require("../assets/medals/ques.png")
var ref6 = require("../assets/medals/ques.png")

const firebase = require("firebase")
require("firebase/firestore")
const db = firebase.firestore();

var res = 0


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

  const [name,sname] = useState("")

  AsyncStorage.getItem("userName").then(value => {
    sname(value)
  })

  const [surname,ssurname] = useState("")

  AsyncStorage.getItem("userSurname").then(value => {
    ssurname(value)
  })
    
  const [stl,sstyle] = useState("0")
  var clrs = ['#6B8B8F', '#B4EAF0']

  var styles = styles1
  AsyncStorage.getItem("style").then(value => {
    sstyle(value)
  })

  if (stl == "4"){
    styles = styles4
    clrs = ["black","black"]
  }else   if (stl == "3"){
    styles = styles3
    clrs = ['#E7EDFF', '#FFFFFF']
  }else   if (stl == "2"){
    styles = styles2
    clrs = ["#800000","#800000"]
  }else{
    styles = styles1
    clrs = ['#6B8B8F', '#B4EAF0']
  }

  const [n1,sn1] = useState("У вас пока нет этого достижения")
  const [n2,sn2] = useState("У вас пока нет этого достижения")
  const [n3,sn3] = useState("У вас пока нет этого достижения")
  const [n4,sn4] = useState("У вас пока нет этого достижения")
  const [n5,sn5] = useState("У вас пока нет этого достижения")

  const [m1,sm1] = useState("0")
  const [m2,sm2] = useState("0")
  const [m3,sm3] = useState("0")
  const [m4,sm4] = useState("0")
  const [m5,sm5] = useState("0")



  var ball = 0
  var cell = db.collection("Evo1").doc("users");
  cell.get().then((doc) => {
    var q = doc.data()
    var nm = surname + " " + name
    sm1(q[nm][0])
    sm2(q[nm][1])
    sm3(q[nm][2])
    sm4(q[nm][3])
    sm5(q[nm][4])
    if (m1 == "1"){
      sn1("Верифицирован")
      ref1 =  require("../assets/medals/medal.png")
      ball = ball + 1
    }
    if (m2 == "1"){
      sn2("Уборщик 1лвл")
      ref2 =  require("../assets/medals/cleaner.png")
      ball = ball + 3
    }
    if (m3 == "1"){
      sn3("Кент")
      ref3 =  require("../assets/medals/kent.png")
      ball = ball + 5
    }
    if (m4 == "1"){
      sn4("Разраб")
      ref4 =  require("../assets/medals/dev.png")
      ball = ball + 10
    }
    if (m5 == "1"){
      sn5("Главарь")
      ref5 =  require("../assets/medals/glav.png")
      ball = ball + 10
    }
  })

  const users = ["Акмалутдинов Динияр", "Бариев Булат", "Воробьев Матвей",
  "Галаутдинов Карим", "Гашигуллин Кирам", "Димухаметов Раиль",
  "Загидуллин Хасан","Замалеев Идрис","Закиров Нияз",
  "Ильин Арслан","Исмагилов Амир","Леухин Алексей",
  "Лукьянов Кирилл","Мифтахов Карим","Мустафин Карим",
  "Мустафин Самат","Мухаметгалиев Аяз","Пимурзин Руслан",
  "Пимурзин Рустам","Сахабутдинов Марат","Фазлиев Зуфар",
  "Фаизов Рамиль","Хамидуллин Самат","Шамсиев Асгат",
  "Юсупов Ислам"]

  //cell = db.collection("Evo1").doc("balls");
  //cell.get().then((doc) => {
  //  q = doc.data()
  //  q = q.b
  //  q[users.indexOf("Мустафин Карим")] = ball
  //  console.log(q)
  //})

  
  
  const [a,sa] = useState(0)


  if (a == 1){
    sa(0)
  }else if (a == 0){
    if(res == 0){
      res = 1
      setInterval(function(){
        sa(1)
      },300)
    }
    return (
      // <SafeAreaView style={styles.ground}>


      <View style={styles.ground}>
        <LinearGradient
          // Background Linear Gradient
            colors={clrs}
          style={styles.background}
        >

        <ScrollView>
          <View style={styles.scroll}>

              <Text style={styles.t3b}>Достижения:</Text>
              
              <View style={styles.medal}>
                  <Image
                  style={styles.img}
                  source={ref1}
                  />
                  <Text style={styles.t3}>{n1}</Text>
              </View>

              <View style={styles.medal}>
                  <Image
                  style={styles.img}
                  source={ref2}
                  />
                  <Text style={styles.t3}>{n2}</Text>
              </View>

              <View style={styles.medal}>
                  <Image
                  style={styles.img}
                  source={ref3}
                  />
                  <Text style={styles.t3}>{n3}</Text>
              </View>

              <View style={styles.medal}>
                  <Image
                  style={styles.img}
                  source={ref4}
                  />
                  <Text style={styles.t3}>{n4}</Text>
              </View>

              <View style={styles.medal}>
                  <Image
                  style={styles.img}
                  source={ref5}
                  />
                  <Text style={styles.t3}>{n5}</Text>
              </View>



          </View>
        </ScrollView>


        </LinearGradient>
      </View>

      // </SafeAreaView>
    );
  }  
}


const styles1 = StyleSheet.create({
  ground:{
    flex:1,
  },

  background:{
    height:"100%",
    width:"100%",
  },

  scroll:{
    alignItems:"center",
    wight:"100%"
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
      paddingBottom:5,
      marginLeft:15
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

  t3b:{
    textAlign:"center",
    fontSize:20,
    color:"#234952",
    fontFamily:"medium",
    marginBottom:10,
    marginTop:25
  },
  
  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#234952",
    fontFamily:"medium",
    marginBottom:3
  },

  sub:{
    fontSize:19,
    color:"#fff",
    fontFamily:"thin",
    padding:15,
    margin:2,
    width:"97%",
    borderRadius:20
  },

  medal:{
    justifyContent:"center",
    backgroundColor:"#234952",
    padding:15,
    margin:2,
    width:"97%",
    borderRadius:20,
    flexDirection:"row"
  },


  navpan:{
    alignItems:"center",
    width:"100%",
    height:"8%",
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
    backgroundColor:"#800000"
  },

  background:{
    height:"100%",
    width:"100%",
  },

  scroll:{
    alignItems:"center",
    wight:"100%"
  }  ,


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
    color:"#800000",
    fontFamily:"medium",
      paddingBottom:5,
      marginLeft:15
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

  t3b:{
    textAlign:"center",
    fontSize:20,
    color:"#fff",
    fontFamily:"medium",
    marginBottom:10,
    marginTop:25
  },
  
  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#0D0091",
    fontFamily:"medium",
    marginBottom:3
  },

  sub:{
    fontSize:19,
    color:"#fff",
    fontFamily:"thin",
    padding:15,
    margin:2,
    width:"97%",
    borderRadius:20
  },

  medal:{
    justifyContent:"center",
    backgroundColor:"#fff",
    padding:15,
    margin:2,
    width:"97%",
    borderRadius:20,
    flexDirection:"row"
  },


  navpan:{
    alignItems:"center",
    width:"100%",
    height:"8%",
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
  },

  background:{
    height:"100%",
    width:"100%",
  },

  scroll:{
    alignItems:"center",
    wight:"100%"
  }  ,


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
      paddingBottom:5,
      marginLeft:15
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

  t3b:{
    textAlign:"center",
    fontSize:20,
    color:"#0D0091",
    fontFamily:"medium",
    marginBottom:10,
    marginTop:25
  },
  
  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#0D0091",
    fontFamily:"medium",
    marginBottom:3
  },

  sub:{
    fontSize:19,
    color:"#fff",
    fontFamily:"thin",
    padding:15,
    margin:2,
    width:"97%",
    borderRadius:20
  },

  medal:{
    justifyContent:"center",
    backgroundColor:"#6D5EFF",
    padding:15,
    margin:2,
    width:"97%",
    borderRadius:20,
    flexDirection:"row"
  },


  navpan:{
    alignItems:"center",
    width:"100%",
    height:"8%",
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
    backgroundColor:"black"
  },

  background:{
    height:"100%",
    width:"100%",
  },

  scroll:{
    alignItems:"center",
    wight:"100%"
  }  ,


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
      paddingBottom:5,
      marginLeft:15
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

  t3b:{
    textAlign:"center",
    fontSize:20,
    color:"#fff",
    fontFamily:"medium",
    marginBottom:10,
    marginTop:25
  },
  
  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#0D0091",
    fontFamily:"medium",
    marginBottom:3
  },

  sub:{
    fontSize:19,
    color:"#fff",
    fontFamily:"thin",
    padding:15,
    margin:2,
    width:"97%",
    borderRadius:20
  },

  medal:{
    justifyContent:"center",
    backgroundColor:"#0D0091",
    padding:15,
    margin:2,
    width:"97%",
    borderRadius:20,
    flexDirection:"row"
  },


  navpan:{
    alignItems:"center",
    width:"100%",
    height:"8%",
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