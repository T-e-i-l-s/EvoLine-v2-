
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from "react";
import { StyleSheet, View, Text, Button , Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebase = require("firebase")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCfZ1GVgwffHq5h2mcJHjIaNc0SgkH-4-0",
  authDomain: "evoline-bd9c1.firebaseapp.com",
  projectId: "evoline-bd9c1",
  storageBucket: "evoline-bd9c1.appspot.com",
  messagingSenderId: "661077431736",
  appId: "1:661077431736:web:446a532725153626a3ab4d"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();



var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var wd = date.getUTCDay();
var wrt = 0;
var d

if (wd == 0){
  wd = 7
}


export default function App({navigation}) {

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



  var r1 = require("../assets/icons/ahome.png")
  var r2 = require("../assets/icons/book.png")
  var r3 = require("../assets/icons/face.png")

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
    r1 = require("../assets/icons/gahome.png")
    r2 = require("../assets/icons/gbook.png")
    r3 = require("../assets/icons/gface.png")
  }else{
    styles = styles1
    clrs = ['#6B8B8F', '#B4EAF0']
    r1 = require("../assets/icons/gahome.png")
    r2 = require("../assets/icons/gbook.png")
    r3 = require("../assets/icons/gface.png")
  }



  const [m1,setm1] = useState("1")
  const [m2,setm2] = useState("1")
  const [m3,setm3] = useState("1")
  const [m4,setm4] = useState("1")
  const [m5,setm5] = useState("1")
  const [m6,setm6] = useState("1")
  const [m7,setm7] = useState("1")
  const [m8,setm8] = useState("1")
  const [m9,setm9] = useState("1")

  const [tue1,settu1] = useState("2")
  const [tue2,settu2] = useState("2")
  const [tue3,settu3] = useState("2")
  const [tue4,settu4] = useState("2")
  const [tue5,settu5] = useState("2")
  const [tue6,settu6] = useState("2")
  const [tue7,settu7] = useState("2")
  const [tue8,settu8] = useState("2")
  const [tue9,settu9] = useState("2")

  const [w1,setw1] = useState("3")
  const [w2,setw2] = useState("3")
  const [w3,setw3] = useState("3")
  const [w4,setw4] = useState("3")
  const [w5,setw5] = useState("3")
  const [w6,setw6] = useState("3")
  const [w7,setw7] = useState("3")
  const [w8,setw8] = useState("3")
  const [w9,setw9] = useState("3")

  const [thu1,setth1] = useState("4")
  const [thu2,setth2] = useState("4")
  const [thu3,setth3] = useState("4")
  const [thu4,setth4] = useState("4")
  const [thu5,setth5] = useState("4")
  const [thu6,setth6] = useState("4")
  const [thu7,setth7] = useState("4")
  const [thu8,setth8] = useState("4")
  const [thu9,setth9] = useState("4")

  const [f1,setf1] = useState("5")
  const [f2,setf2] = useState("5")
  const [f3,setf3] = useState("5")
  const [f4,setf4] = useState("5")
  const [f5,setf5] = useState("5")
  const [f6,setf6] = useState("5")
  const [f7,setf7] = useState("5")
  const [f8,setf8] = useState("5")
  const [f9,setf9] = useState("5")

  const [s1,sets1] = useState("6")
  const [s2,sets2] = useState("6")
  const [s3,sets3] = useState("6")
  const [s4,sets4] = useState("6")
  const [s5,sets5] = useState("6")
  const [s6,sets6] = useState("6")
  const [s7,sets7] = useState("6")
  const [s8,sets8] = useState("6")
  const [s9,sets9] = useState("6")


  const [l1,sl1] = useState("-")
  const [l2,sl2] = useState("-")
  const [l3,sl3] = useState("-")
  const [l4,sl4] = useState("-")
  const [l5,sl5] = useState("-")
  const [l6,sl6] = useState("-")
  const [l7,sl7] = useState("-")
  const [l8,sl8] = useState("-")
  const [l9,sl9] = useState("-")



  var cell = db.collection("Evo1").doc("timetable");
  cell.get().then((doc) => {
    var q = doc.data()
    setm1(q.m1);
    setm2(q.m2);
    setm3(q.m3);
    setm4(q.m4);
    setm5(q.m5);
    setm6(q.m6);
    setm7(q.m7);
    setm8(q.m8);
    setm9(q.m9);

    settu1(q.tu1);
    settu2(q.tu2);
    settu3(q.tu3);
    settu4(q.tu4);
    settu5(q.tu5);
    settu6(q.tu6);
    settu7(q.tu7);
    settu8(q.tu8);
    settu9(q.tu9);

    setw1(q.w1);
    setw2(q.w2);
    setw3(q.w3);
    setw4(q.w4);
    setw5(q.w5);
    setw6(q.w6);
    setw7(q.w7);
    setw8(q.w8);
    setw9(q.w9);

    setth1(q.th1);
    setth2(q.th2);
    setth3(q.th3);
    setth4(q.th4);
    setth5(q.th5);
    setth6(q.th6);
    setth7(q.th7);
    setth8(q.th8);
    setth9(q.th9);

    setf1(q.f1);
    setf2(q.f2);
    setf3(q.f3);
    setf4(q.f4);
    setf5(q.f5);
    setf6(q.f6);
    setf7(q.f7);
    setf8(q.f8);
    setf9(q.f9);

    sets1(q.s1);
    sets2(q.s2);
    sets3(q.s3);
    sets4(q.s4);
    sets5(q.s5);
    sets6(q.s6);
    sets7(q.s7);
    sets8(q.s8);
    sets9(q.s9);

    if(l1 == '-'){
      if(wd == 1 || wd == 7){
        sl1(q.m1)
        sl2(q.m2)
        sl3(q.m3)
        sl4(q.m4)
        sl5(q.m5)
        sl6(q.m6)
        sl7(q.m7)
        sl8(q.m8)
        sl9(q.m9)
      }else if(wd == 2){ 
        sl1(q.tu1)
        sl2(q.tu2)
        sl3(q.tu3)
        sl4(q.tu4)
        sl5(q.tu5)
        sl6(q.tu6)
        sl7(q.tu7)
        sl8(q.tu8)
        sl9(q.tu9)
      }else if(wd == 3){
        sl1(q.w1)
        sl2(q.w2)
        sl3(q.w3)
        sl4(q.w4)
        sl5(q.w5)
        sl6(q.w6)
        sl7(q.w7)
        sl8(q.w8)
        sl9(q.w9)
      }else if(wd == 4){
        sl1(q.th1)
        sl2(q.th2)
        sl3(q.th3)
        sl4(q.th4)
        sl5(q.th5)
        sl6(q.th6)
        sl7(q.th7)
        sl8(q.th8)
        sl9(q.th9)
      }else if(wd == 5){
        sl1(q.f1)
        sl2(q.f2)
        sl3(q.f3)
        sl4(q.f4)
        sl5(q.f5)
        sl6(q.f6)
        sl7(q.f7)
        sl8(q.f8)
        sl9(q.f9)
      }else if(wd == 6){
        sl1(q.s1)
        sl2(q.s2)
        sl3(q.s3)
        sl4(q.s4)
        sl5(q.s5)
        sl6(q.s6)
        sl7(q.s7)
        sl8(q.s8)
        sl9(q.s9)
      }
    }
  })



  const d1 = () => {
    sl1(m1)
    sl2(m2)
    sl3(m3)
    sl4(m4)
    sl5(m5)
    sl6(m6)
    sl7(m7)
    sl8(m8)
    sl9(m9)
    d = "понедельник"
  }

  const d2 = () => {
    sl1(tue1)
    sl2(tue2)
    sl3(tue3)
    sl4(tue4)
    sl5(tue5)
    sl6(tue6)
    sl7(tue7)
    sl8(tue8)
    sl9(tue9)
    d = "вторник"
  }

  const d3 = () => {
    sl1(w1)
    sl2(w2)
    sl3(w3)
    sl4(w4)
    sl5(w5)
    sl6(w6)
    sl7(w7)
    sl8(w8)
    sl9(w9)
    d = "среду"
  }

  const d4 = () => {
    sl1(thu1)
    sl2(thu2)
    sl3(thu3)
    sl4(thu4)
    sl5(thu5)
    sl6(thu6)
    sl7(thu7)
    sl8(thu8)
    sl9(thu9)
    d = "четверг"
  }

  const d5 = () => {
    sl1(f1)
    sl2(f2)
    sl3(f3)
    sl4(f4)
    sl5(f5)
    sl6(f6)
    sl7(f7)
    sl8(f8)
    sl9(f9)
    d = "пятницу"
  }

  const d6 = () => {
    sl1(s1)
    sl2(s2)
    sl3(s3)
    sl4(s4)
    sl5(s5)
    sl6(s6)
    sl7(s7)
    sl8(s8)
    sl9(s9)
    d = "субботу"
  }

  if(wrt == 0){
    if (wd == 1 || wd == 7){d = "понедельник"}
    else if(wd == 2){d = "вторник"}
    else if(wd == 3){d = "среду"}
    else if(wd == 4){d = "четверг"}
    else if(wd == 5){d = "пятницу"}
    else if(wd == 6){d = "субботу"}     
    wrt = 1
  }
  return (
    <SafeAreaView style={styles.ground}>


    {/* <View style={styles.ground}> */}

      <LinearGradient
        // Background Linear Gradient
          colors={clrs}
        style={styles.background}
      >
      
        <View style={styles.top}>
          <View style={styles.date}>
            <Text style={styles.t3}>{day + '.' + month + '.' + year} </Text>
          </View>  
          <View style={styles.daysline}>
            <View style={styles.day}  onStartShouldSetResponder={d1}><Text style={styles.t31}>Пн</Text></View>
            <View style={styles.day}  onStartShouldSetResponder={d2}><Text style={styles.t31}>Вт</Text></View>
            <View style={styles.day}  onStartShouldSetResponder={d3}><Text style={styles.t31}>Ср</Text></View>
            <View style={styles.day}  onStartShouldSetResponder={d4}><Text style={styles.t31}>Чт</Text></View>
            <View style={styles.day}  onStartShouldSetResponder={d5}><Text style={styles.t31}>Пт</Text></View>
            <View style={styles.day}  onStartShouldSetResponder={d6}><Text style={styles.t31}>Сб</Text></View>
          </View>  

          <Text style={styles.t3b}>{'Расписание на ' + d + ':'}</Text>

          <View style={styles.les}><Text style={styles.t2}>{l1}</Text></View>
          <View style={styles.les}><Text style={styles.t2}>{l2}</Text></View>
          <View style={styles.les}><Text style={styles.t2}>{l3}</Text></View>
          <View style={styles.les}><Text style={styles.t2}>{l4}</Text></View>
          <View style={styles.les}><Text style={styles.t2}>{l5}</Text></View>
          <View style={styles.les}><Text style={styles.t2}>{l6}</Text></View>
          <View style={styles.les}><Text style={styles.t2}>{l7}</Text></View>
          <View style={styles.les}><Text style={styles.t2}>{l8}</Text></View>

        </View>

        {/* nav panel */}
        <View style={styles.navpan}>


          <View  style={styles.anavbut}>
            <Text style={styles.navbut2}>
              <Image
                style={styles.img}
                source={r1}
              />
            </Text>
          </View>


          <View  style={styles.navbut1}>
            <Text onPress={tohw} style={styles.navbut2}>
              <Image
                style={styles.img}
                source={r2}
              />
            </Text>
          </View>


          <View  style={styles.navbut1}>
            <Text onPress={touser} style={styles.navbut2}>
              <Image
                style={styles.img}
                source={r3}
              />
            </Text>
          </View>


        </View>

      </LinearGradient>

    {/* </View> */}

    </SafeAreaView>
  );
}

const styles1 = StyleSheet.create({
  ground:{
    flex:1,
    backgroundColor:"#234952",
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
    marginTop:10
  },
  
  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#234952",
    fontFamily:"medium",
    marginBottom:3
  },

  top:{
    justifyContent:"flex-start",
    alignItems:"center",
    width:"100%",
    height: "92%",
  },

  date:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#234952",
    width:"100%",
    height:60,
    padding:5,
  },

  daysline:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    backgroundColor:"#234952",
    width:"100%",
    height:55,
    paddingBottom:5,
    marginBottom:7
  },

  day:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#34706E",
    fontFamily:"thin",
    width:"13%",
    height:"97%",
    marginHorizontal:5,
    borderRadius:10
  },
  
  les:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#34706E",
    margin:4,
    padding:13,
    width:"93%",
    borderRadius:15
  },

  navpan:{
    alignItems:"center",
    width:"100%",
    height:"8%",
    flexDirection:"row",
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
    backgroundColor:"#fff",
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
    color:"#800000",
    fontFamily:"thin"
  },

  t2:{
    fontSize:19,
    color:"#800000",
    fontFamily:"thin"
  },

  t3:{
    fontSize:22,
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
    color:"fff",
    fontFamily:"thin"
  },

  t2b:{
    textAlign:"center",
    fontSize:17,
    color:"#fff",
    fontFamily:"thin"
  },

  t3b:{
    textAlign:"center",
    fontSize:20,
    color:"#fff",
    fontFamily:"medium",
    marginBottom:10,
    marginTop:10
  },
  
  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#fff",
    fontFamily:"medium",
    marginBottom:3
  },

  top:{
    justifyContent:"flex-start",
    alignItems:"center",
    width:"100%",
    height: "92%",
  },

  date:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
    width:"100%",
    height:60,
    padding:5,
  },

  daysline:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    backgroundColor:"#fff",
    width:"100%",
    height:60,
    paddingBottom:5,
    marginBottom:7
  },

  day:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#e1e1e1",
    fontFamily:"thin",
    width:"13%",
    height:"97%",
    marginHorizontal:5,
    borderRadius:10
  },
  
  les:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#e1e1e1",
    margin:4,
    padding:13,
    width:"93%",
    borderRadius:15
  },

  navpan:{
    alignItems:"center",
    width:"100%",
    height:"8%",
    flexDirection:"row",
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
    backgroundColor:"#554ACB",
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
    marginTop:10
  },
  
  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#0D0091",
    fontFamily:"medium",
    marginBottom:3
  },

  top:{
    justifyContent:"flex-start",
    alignItems:"center",
    width:"100%",
    height: "92%",
  },

  date:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#554ACB",
    width:"100%",
    height:60,
    padding:5,
  },

  daysline:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    backgroundColor:"#554ACB",
    width:"100%",
    height:55,
    paddingBottom:5,
    marginBottom:7
  },

  day:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#6D5EFF",
    fontFamily:"thin",
    width:"13%",
    height:"97%",
    marginHorizontal:5,
    borderRadius:10
  },
  
  les:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#6D5EFF",
    margin:4,
    padding:13,
    width:"93%",
    borderRadius:15
  },

  navpan:{
    alignItems:"center",
    width:"100%",
    height:"8%",
    flexDirection:"row",
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
    backgroundColor:"#0d004b",
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
    marginTop:10
  },
  
  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#0D0091",
    fontFamily:"medium",
    marginBottom:3
  },

  top:{
    justifyContent:"flex-start",
    alignItems:"center",
    width:"100%",
    height: "92%",
  },

  date:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#0d004b",
    width:"100%",
    height:60,
    padding:5,
  },

  daysline:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    backgroundColor:"#0d004b",
    width:"100%",
    height:60,
    paddingBottom:5,
    marginBottom:7
  },

  day:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#0D0091",
    fontFamily:"thin",
    width:"13%",
    height:"97%",
    marginHorizontal:5,
    borderRadius:10
  },
  
  les:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#0D0091",
    margin:4,
    padding:13,
    width:"93%",
    borderRadius:15
  },

  navpan:{
    alignItems:"center",
    width:"100%",
    height:"8%",
    flexDirection:"row",
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