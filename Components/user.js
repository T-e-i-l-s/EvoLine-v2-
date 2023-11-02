
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from "react";
import { StyleSheet, View, Text, Button , Image , Linking, ToastAndroid} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const totop = () => {
    navigation.navigate("top")
  }

  const toachiv = () => {
    navigation.navigate("achiv")
  }

  const toreg = () => {
    sa(1)
    navigation.navigate("reg")
  }

  const toev1 = () => {
    navigation.navigate("ev1")
  }

  const tofacts = () => {
    navigation.navigate("facts")
  }

  const todel = () => {
    navigation.navigate("img")
  }


  const openTelegram = () => {
    let url = 'https://web.telegram.org/k/#@LyutyChel';
    Linking.openURL(url)
  }

  const [name,sname] = useState("")
  AsyncStorage.getItem("userName").then(value => {
    sname(value)
  })

  const [surname,ssurname] = useState("")
  AsyncStorage.getItem("userSurname").then(value => {
    ssurname(value)
  })


  var r1 = require("../assets/icons/home.png")
  var r2 = require("../assets/icons/book.png")
  var r3 = require("../assets/icons/aface.png")


  const [stl,sstyle] = useState("0")
  var clrs = ['#E7EDFF', '#FFFFFF']

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
    r1 = require("../assets/icons/ghome.png")
    r2 = require("../assets/icons/gbook.png")
    r3 = require("../assets/icons/gaface.png")
  }else{
    styles = styles1
    clrs = ['#6B8B8F', '#B4EAF0']
    r1 = require("../assets/icons/ghome.png")
    r2 = require("../assets/icons/gbook.png")
    r3 = require("../assets/icons/gaface.png")
  }




  const [a,sa] = useState(0)


  if (a == 3){
    sa(1)
  }else if ((name != "" && name != null) || a == 1){
    if(res == 0){
      res = 1
      setInterval(function(){
        sa(3)
      },100)
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
          {/* header */}
          <View style={styles.name}>
            <Text style={styles.t3}>{surname + " " + name}</Text>
          </View>

          {/* event */}

          <Text style={styles.t3b}>Для вас:</Text>
          <View  style={styles.events}>
            <View style={styles.ev1} onStartShouldSetResponder={toev1}>
              <Text style={styles.t3}>EvoLine 2</Text>
              <Text style={styles.t31}>Что нового?</Text>
            </View>
            <View style={styles.ev2} onStartShouldSetResponder={tofacts}>
              <Text style={styles.t3}>Факты</Text>
            </View>
          </View>


          {/* buttons */}

          <Text style={styles.t3b}>Остальное:</Text>
          <View style={styles.buts}>
            <View style={styles.but1} onStartShouldSetResponder={totop}>
              <Text style={styles.t31}>Рейтинг</Text>
            </View>
            <View style={styles.but} onStartShouldSetResponder={toachiv}>
              <Text style={styles.t31}>Мои достижения</Text>
            </View>
            <View style={styles.but} onStartShouldSetResponder={todel}>
              <Text style={styles.t31}>Доставка</Text>
            </View>
            <View style={styles.but} onStartShouldSetResponder={openTelegram}>
              <Text style={styles.t31}>Связь с разрабом</Text>
            </View>
            <View style={styles.but2} onStartShouldSetResponder={toset}>
              <Text style={styles.t31}>Настройки</Text>
            </View>
          </View>
        </View>


        {/* nav panel */}
        <View style={styles.navpan}>


          <View  style={styles.anavbut}>
            <Text onPress={tohome} style={styles.navbut2}>
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
            <Text style={styles.navbut2}>
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
  }else{
    return (
      <SafeAreaView style={styles.ground2}>


      {/* <View style={styles.ground}> */}

        <LinearGradient
          // Background Linear Gradient
          colors={clrs}
          style={styles.background2}
        >

        <Text style={styles.t5b}>Здравствуйте, это новая версия EvoLine, для начала зарегистрируйтесь!</Text>
        <View style={styles.but3} onStartShouldSetResponder={toreg}>
          <Text style={styles.t3}>Начать!</Text>
        </View>

        </LinearGradient>

      {/* </View> */}

      </SafeAreaView>
    );
  }
}



var styles1 = StyleSheet.create({
  ground:{
    flex:1,
    backgroundColor:"#6B8B8F",
    justifyContent:"flex-end"
  },

  ground2:{
    flex:1,
    backgroundColor:"#6B8B8F",
    justifyContent:"center",
    alignItems:"center"
  },

  background:{
    alignItems:"flex-start",
    height:"100%",
    width:"100%",
    justifyContent:"flex-end"
  },

  background2:{
    alignItems:"center",
    height:"100%",
    width:"100%",
    justifyContent:"center"
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
    marginTop:5
  },

  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#234952",
    fontFamily:"medium",
    marginBottom:3
  },

  t5b:{
    textAlign:"center",
    fontSize:27,
    color:"#234952",
    fontFamily:"medium",
    marginTop:5,
    padding:5,
    margin:15
  },


  top:{
    justifyContent:"flex-start",
    alignItems:"center",
    width:"100%",
    height: "92%",
  },

  name:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#234952",
    width:"93%",
    height:"15%",
    marginTop:15,
    marginBottom:15,
    borderRadius:20,
  },

  events:{
    justifyContent:"center",
    alignItems:"flex-start",
    flexDirection:"row",
    width:"100%",
    height:140,
    marginTop:7,
  },

  ev1:{
    justifyContent:"center",
    alignItems:"center",
    height:120,
    width:150,
    backgroundColor:"#800000",
    borderRadius:20,
    marginHorizontal:7
  },

  ev2:{
    justifyContent:"center",
    alignItems:"center",
    height:120,
    width:150,
    backgroundColor:"#ffbb00",
    borderRadius:20,
    marginHorizontal:7
  },

  buts:{
    justifyContent:"center",
    alignItems:"center",
    width:"93%",
    height:"45%",
    marginTop:7,
    marginBottom:15,
    borderRadius:20,
  },

  but1:{
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"20%",
    backgroundColor:"#234952",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderWidth:0.5,
    borderColor:"#8a8a8a"
  },

  but2:{
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"20%",
    backgroundColor:"#234952",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderWidth:0.5,
    borderColor:"#8a8a8a"
  },

  but3:{
    justifyContent:"center",
    alignItems:"center",
    width:"50%",
    height:"8%",
    backgroundColor:"#234952",
    borderRadius:20,
    borderRadius:20
  },

  but:{
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"20%",
    backgroundColor:"#234952",
    borderWidth:0.5,
    borderColor:"#8a8a8a"
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


var styles2 = StyleSheet.create({
  ground:{
    flex:1,
    backgroundColor:"#800000",
    justifyContent:"flex-end"
  },

  ground2:{
    flex:1,
    backgroundColor:"#800000",
    justifyContent:"center",
    alignItems:"center"
  },

  background:{
    alignItems:"flex-start",
    height:"100%",
    width:"100%",
    justifyContent:"flex-end"
  },

  background2:{
    alignItems:"center",
    height:"100%",
    width:"100%",
    justifyContent:"center"
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
    color:"#fff",
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
    marginTop:5
  },

  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#fff",
    fontFamily:"medium",
    marginBottom:3
  },

  t5b:{
    textAlign:"center",
    fontSize:27,
    color:"#fff",
    fontFamily:"medium",
    marginTop:5,
    padding:5,
    margin:15
  },


  top:{
    justifyContent:"flex-start",
    alignItems:"center",
    width:"100%",
    height: "92%",
  },

  name:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
    width:"93%",
    height:"15%",
    marginTop:15,
    marginBottom:15,
    borderRadius:20,
  },

  events:{
    justifyContent:"center",
    alignItems:"flex-start",
    flexDirection:"row",
    width:"100%",
    height:140,
    marginTop:7,
  },

  ev1:{
    justifyContent:"center",
    alignItems:"center",
    height:120,
    width:150,
    backgroundColor:"#fff",
    borderRadius:20,
    marginHorizontal:7
  },

  ev2:{
    justifyContent:"center",
    alignItems:"center",
    height:120,
    width:150,
    backgroundColor:"#fff",
    borderRadius:20,
    marginHorizontal:7
  },

  buts:{
    justifyContent:"center",
    alignItems:"center",
    width:"93%",
    height:"45%",
    marginTop:7,
    marginBottom:15,
    borderRadius:20,
  },

  but1:{
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"20%",
    backgroundColor:"#fff",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderWidth:0.5,
    borderColor:"#800000"
  },

  but2:{
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"20%",
    backgroundColor:"#fff",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderWidth:0.5,
    borderColor:"#800000"
  },

  but3:{
    justifyContent:"center",
    alignItems:"center",
    width:"50%",
    height:"8%",
    backgroundColor:"#fff",
    borderRadius:20,
    borderRadius:20
  },

  but:{
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"20%",
    backgroundColor:"#fff",
    borderWidth:0.5,
    borderColor:"#800000"
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

var styles3 = StyleSheet.create({
  ground:{
    flex:1,
    backgroundColor:"#E7EDFF",
    justifyContent:"flex-end"
  },

  ground2:{
    flex:1,
    backgroundColor:"#E7EDFF",
    justifyContent:"center",
    alignItems:"center"
  },

  background:{
    alignItems:"flex-start",
    height:"100%",
    width:"100%",
    justifyContent:"flex-end"
  },

  background2:{
    alignItems:"center",
    height:"100%",
    width:"100%",
    justifyContent:"center"
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
    marginTop:5
  },

  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#0D0091",
    fontFamily:"medium",
    marginBottom:3
  },

  t5b:{
    textAlign:"center",
    fontSize:27,
    color:"#0D0091",
    fontFamily:"medium",
    marginTop:5,
    padding:5,
    margin:15
  },


  top:{
    justifyContent:"flex-start",
    alignItems:"center",
    width:"100%",
    height: "92%",
  },

  name:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#6D5EFF",
    width:"93%",
    height:"15%",
    marginTop:15,
    marginBottom:15,
    borderRadius:20,
  },

  events:{
    justifyContent:"center",
    alignItems:"flex-start",
    flexDirection:"row",
    width:"100%",
    height:140,
    marginTop:7,
  },

  ev1:{
    justifyContent:"center",
    alignItems:"center",
    height:120,
    width:150,
    backgroundColor:"#800000",
    borderRadius:20,
    marginHorizontal:7
  },

  ev2:{
    justifyContent:"center",
    alignItems:"center",
    height:120,
    width:150,
    backgroundColor:"#ffbb00",
    borderRadius:20,
    marginHorizontal:7
  },

  buts:{
    justifyContent:"center",
    alignItems:"center",
    width:"93%",
    height:"45%",
    marginTop:7,
    marginBottom:15,
    borderRadius:20,
  },

  but1:{
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"20%",
    backgroundColor:"#6D5EFF",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderWidth:0.5,
    borderColor:"#fff"
  },

  but2:{
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"20%",
    backgroundColor:"#6D5EFF",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderWidth:0.5,
    borderColor:"#fff"
  },

  but3:{
    justifyContent:"center",
    alignItems:"center",
    width:"50%",
    height:"8%",
    backgroundColor:"#800000",
    borderRadius:20,
    borderRadius:20
  },

  but:{
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"20%",
    backgroundColor:"#6D5EFF",
    borderWidth:0.5,
    borderColor:"#fff"
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


var styles4 = StyleSheet.create({
  ground:{
    flex:1,
    backgroundColor:"black",
    justifyContent:"flex-end"
  },

  ground2:{
    flex:1,
    backgroundColor:"black",
    justifyContent:"center",
    alignItems:"center"
  },

  background:{
    alignItems:"flex-start",
    height:"100%",
    width:"100%",
    justifyContent:"flex-end"
  },

  background2:{
    alignItems:"center",
    height:"100%",
    width:"100%",
    justifyContent:"center"
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
    color:"#fff",
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
    marginTop:5
  },

  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#fff",
    fontFamily:"medium",
    marginBottom:3
  },

  t5b:{
    textAlign:"center",
    fontSize:27,
    color:"#fff",
    fontFamily:"medium",
    marginTop:5,
    padding:5,
    margin:15
  },


  top:{
    justifyContent:"flex-start",
    alignItems:"center",
    width:"100%",
    height: "92%",
  },

  name:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#0D0091",
    width:"93%",
    height:"15%",
    marginTop:15,
    marginBottom:15,
    borderRadius:20,
  },

  events:{
    justifyContent:"center",
    alignItems:"flex-start",
    flexDirection:"row",
    width:"100%",
    height:140,
    marginTop:7,
  },

  ev1:{
    justifyContent:"center",
    alignItems:"center",
    height:120,
    width:150,
    backgroundColor:"#800000",
    borderRadius:20,
    marginHorizontal:7
  },

  ev2:{
    justifyContent:"center",
    alignItems:"center",
    height:120,
    width:150,
    backgroundColor:"#ffbb00",
    borderRadius:20,
    marginHorizontal:7
  },

  buts:{
    justifyContent:"center",
    alignItems:"center",
    width:"93%",
    height:"45%",
    marginTop:7,
    marginBottom:15,
    borderRadius:20,
  },

  but1:{
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"20%",
    backgroundColor:"#0D0091",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderWidth:0.5,
    borderColor:"black"
  },

  but2:{
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"20%",
    backgroundColor:"#0D0091",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderWidth:0.5,
    borderColor:"black"
  },

  but3:{
    justifyContent:"center",
    alignItems:"center",
    width:"50%",
    height:"8%",
    backgroundColor:"#0D0091",
    borderRadius:20,
    borderRadius:20
  },

  but:{
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"20%",
    backgroundColor:"#0D0091",
    borderWidth:0.5,
    borderColor:"black"
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
