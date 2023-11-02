
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Text, Button , Image , Linking, TextInput} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

var name = ""
var surname = ""
var wrt = 0
const firebase = require("firebase")
require("firebase/firestore")

const db = firebase.firestore();

export default function App({navigation}) {



  const [list,slist] = useState("")
  const [list2,sl2] = useState("")
  const [sum,ssum] = useState("")


  const [e1 ,se1 ] = useState("-")
  const [e2 ,se2 ] = useState("-")
  const [e3 ,se3 ] = useState("-")
  const [e4 ,se4 ] = useState("-")
  const [e5 ,se5 ] = useState("-")
  const [e6 ,se6 ] = useState("-")
  const [e7 ,se7 ] = useState("-")
  const [e8 ,se8 ] = useState("-")
  const [e9 ,se9 ] = useState("-")
  const [e10,se10] = useState("-")
  const [e11,se11] = useState("-")
  const [e12,se12] = useState("-")
  const [e13,se13] = useState("-")
  const [e14,se14] = useState("-")
  const [e15,se15] = useState("-")
  const [e16,se16] = useState("-")
  const [e17,se17] = useState("-")
  const [e18,se18] = useState("-")
  const [e19,se19] = useState("-")
  const [e20,se20] = useState("-")
  const [e21,se21] = useState("-")
  const [e22,se22] = useState("-")
  const [e23,se23] = useState("-")
  const [e24,se24] = useState("-")
  const [e25,se25] = useState("-")


  var cell = db.collection("Evo1").doc("delivery");
  cell.get().then((doc) => {
    var q = doc.data()
    se1(q.e1 )
    se2(q.e2 )
    se3(q.e3 )
    se4(q.e4 )
    se5(q.e5 )
    se6(q.e6 )
    se7(q.e7 )
    se8(q.e8 )
    se9(q.e9 )
    se10(q.e10)
    se11(q.e11)
    se12(q.e12)
    se13(q.e13)
    se14(q.e14)
    se15(q.e15)
    se16(q.e16)
    se17(q.e17)
    se18(q.e18)
    se19(q.e19)
    se20(q.e20)
    se21(q.e21)
    se22(q.e22)
    se23(q.e23)
    se24(q.e24)
    se25(q.e25)
  })  



  AsyncStorage.getItem("list").then(value => {
    slist(value)
  })

  AsyncStorage.getItem("sum").then(value => {
    ssum(value)
  })


  const save1 = (e) => {
    name = e
    sl2(surname + ' ' + name + ': ' + list)
  }
  const save2 = (e) => {
    surname = e
    sl2(surname + ' ' + name + ': ' + list + ' Цена с доставкой: ' + sum + 'руб.')
  }

  const touser = () => {
    AsyncStorage.setItem("list",list2)
    if(e1 == "-"){db.collection("Evo1").doc("delivery").update({e1:list2})}
    else if(e2  == "-"){db.collection("Evo1").doc("delivery").update({e2:list2})}
    else if(e3  == "-"){db.collection("Evo1").doc("delivery").update({e3:list2})}
    else if(e4  == "-"){db.collection("Evo1").doc("delivery").update({e4:list2})}
    else if(e5  == "-"){db.collection("Evo1").doc("delivery").update({e5:list2})}
    else if(e6  == "-"){db.collection("Evo1").doc("delivery").update({e6:list2})}
    else if(e7  == "-"){db.collection("Evo1").doc("delivery").update({e7:list2})}
    else if(e8  == "-"){db.collection("Evo1").doc("delivery").update({e8:list2})}
    else if(e9  == "-"){db.collection("Evo1").doc("delivery").update({e9:list2})}
    else if(e10 == "-"){db.collection("Evo1").doc("delivery").update({e10:list2})}
    else if(e11 == "-"){db.collection("Evo1").doc("delivery").update({e11:list2})}
    else if(e12 == "-"){db.collection("Evo1").doc("delivery").update({e12:list2})}
    else if(e13 == "-"){db.collection("Evo1").doc("delivery").update({e13:list2})}
    else if(e14 == "-"){db.collection("Evo1").doc("delivery").update({e14:list2})}
    else if(e15 == "-"){db.collection("Evo1").doc("delivery").update({e15:list2})}
    else if(e16 == "-"){db.collection("Evo1").doc("delivery").update({e16:list2})}
    else if(e17 == "-"){db.collection("Evo1").doc("delivery").update({e17:list2})}
    else if(e18 == "-"){db.collection("Evo1").doc("delivery").update({e18:list2})}
    else if(e19 == "-"){db.collection("Evo1").doc("delivery").update({e19:list2})}
    else if(e20 == "-"){db.collection("Evo1").doc("delivery").update({e20:list2})}
    else if(e21 == "-"){db.collection("Evo1").doc("delivery").update({e21:list2})}
    else if(e22 == "-"){db.collection("Evo1").doc("delivery").update({e22:list2})}
    else if(e23 == "-"){db.collection("Evo1").doc("delivery").update({e23:list2})}
    else if(e24 == "-"){db.collection("Evo1").doc("delivery").update({e24:list2})}
    else if(e25 == "-"){db.collection("Evo1").doc("delivery").update({e25:list2})}
    navigation.navigate("last")
  }


    return (
        <SafeAreaView style={styles.ground}>


        {/* <View style={styles.ground}> */}

            <Text style={styles.title}>Введите ваше имя и фамилию</Text>

            <TextInput style={styles.input} placeholderTextColor={"#bbdefa"} onChangeText={save1} placeholder={"Имя"}/>
            <TextInput style={styles.input} placeholderTextColor={"#bbdefa"} onChangeText={save2} placeholder={"Фамилия"}/>

            <View style={styles.but} onStartShouldSetResponder={touser}>
                <Text style={styles.title}>Оплатить</Text>
            </View>

        {/* </View> */}

        </SafeAreaView>
    );
//   }  
}


var styles = StyleSheet.create({
  ground:{
    flex:1,
    backgroundColor:"#bbdefa",
    alignItems:"center",
    justifyContent:"center",
  },

  title:{
    fontSize:22,
    color:"#fff",
    fontFamily:"medium",
    paddingBottom:5,
    textAlign:"center",
    margin:10
  },

  text:{
    fontSize:16,
    color:"#fff",
    fontFamily:"medium",
    paddingBottom:5,
    textAlign:"center",
    margin:5
  },

  but:{
    justifyContent:"center",
    alignItems:"center",
    width:"50%",
    height:"8%",
    backgroundColor:"#d32f2e",
    borderRadius:20,
    margin:30
  },

  input: {
    width:"80%",
    fontSize:24,
    backgroundColor:"#fff",
    paddingVertical:10,
    paddingHorizontal:15,
    margin:2,
    borderRadius:20,
  },

});

