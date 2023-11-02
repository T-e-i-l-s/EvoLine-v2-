
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from "react";
import { StyleSheet, View, Text, Button , Image , ScrollView} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';



// const firebase = require("firebase")
// require("firebase/firestore")'-','-','-',
// const db = firebase.firestore();



var p = ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-']

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
  
  
  const [stl,sstyle] = useState("0")
  clrs = ['#6B8B8F', '#B4EAF0']
  
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
  

  // const users = ["Акмалутдинов Динияр", "Бариев Булат", "Воробьев Матвей",
  // "Галаутдинов Карим", "Гашигуллин Кирам", "Димухаметов Раиль",
  // "Загидуллин Хасан","Замалеев Идрис","Закиров Нияз",
  // "Ильин Арслан","Исмагилов Амир","Леухин Алексей",
  // "Лукьянов Кирилл","Мифтахов Карим","Мустафин Карим",
  // "Мустафин Самат","Мухаметгалиев Аяз","Пимурзин Руслан",
  // "Пимурзин Рустам","Сахабутдинов Марат","Фазлиев Зуфар",
  // "Фаизов Рамиль","Хамидуллин Самат","Шамсиев Асгат",
  // "Юсупов Ислам"]


  // const result = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  // const sortResult = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

  // sortResult.sort((a, b) => b - a);
  


  // p[0] = users[result.indexOf(sortResult[0])]
  // p[1] = users[result.indexOf(sortResult[1])]
  // p[2] = users[result.indexOf(sortResult[2])]
  // p[3] = users[result.indexOf(sortResult[3])]
  // p[4] = users[result.indexOf(sortResult[4])]
  // p[5] = users[result.indexOf(sortResult[5])]
  // p[6] = users[result.indexOf(sortResult[6])]
  // p[7] = users[result.indexOf(sortResult[7])]
  // p[8] = users[result.indexOf(sortResult[8])]
  // p[9] = users[result.indexOf(sortResult[9])]
  // p[10] = users[result.indexOf(sortResult[10])]
  // p[11] = users[result.indexOf(sortResult[11])]
  // p[12] = users[result.indexOf(sortResult[12])]
  // p[13] = users[result.indexOf(sortResult[13])]
  // p[14] = users[result.indexOf(sortResult[14])]
  // p[15] = users[result.indexOf(sortResult[15])]
  // p[16] = users[result.indexOf(sortResult[16])]
  // p[17] = users[result.indexOf(sortResult[17])]
  // p[18] = users[result.indexOf(sortResult[18])]
  // p[19] = users[result.indexOf(sortResult[19])]
  // p[20] = users[result.indexOf(sortResult[20])]
  // p[21] = users[result.indexOf(sortResult[21])]
  // p[22] = users[result.indexOf(sortResult[22])]
  // p[23] = users[result.indexOf(sortResult[23])]
  // p[24] = users[result.indexOf(sortResult[24])]


  // const [name,sname] = useState("")

  // AsyncStorage.getItem("userName").then(value => {
  //   sname(value)
  // })

  // const [surname,ssurname] = useState("")

  // AsyncStorage.getItem("userSurname").then(value => {
  //   ssurname(value)
  // })

  // var place = p.indexOf(surname + ' ' + name) + 1
              



  return (
    // <SafeAreaView style={styles.ground}>


    <View style={styles.ground}>

        <ScrollView>

            <LinearGradient
                // Background Linear Gradient
                colors={clrs}
                style={styles.background}
            >

                {/* header */}
                <View style={styles.name}>
                    <Text style={styles.t3}>Скоро появится</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>1</Text>
                    <Text style={styles.t3b}>{p[0]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>2</Text>
                    <Text style={styles.t3b}>{p[1]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>3</Text>
                    <Text style={styles.t3b}>{p[2]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>4</Text>
                    <Text style={styles.t3b}>{p[3]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>5</Text>
                    <Text style={styles.t3b}>{p[4]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>6</Text>
                    <Text style={styles.t3b}>{p[5]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>7</Text>
                    <Text style={styles.t3b}>{p[6]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>8</Text>
                    <Text style={styles.t3b}>{p[7]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>9</Text>
                    <Text style={styles.t3b}>{p[8]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>10</Text>
                    <Text style={styles.t3b}>{p[9]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>11</Text>
                    <Text style={styles.t3b}>{p[10]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>12</Text>
                    <Text style={styles.t3b}>{p[11]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>13</Text>
                    <Text style={styles.t3b}>{p[12]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>14</Text>
                    <Text style={styles.t3b}>{p[13]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>15</Text>
                    <Text style={styles.t3b}>{p[14]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>16</Text>
                    <Text style={styles.t3b}>{p[15]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>17</Text>
                    <Text style={styles.t3b}>{p[16]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>18</Text>
                    <Text style={styles.t3b}>{p[17]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>19</Text>
                    <Text style={styles.t3b}>{p[18]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>20</Text>
                    <Text style={styles.t3b}>{p[19]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>21</Text>
                    <Text style={styles.t3b}>{p[20]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>22</Text>
                    <Text style={styles.t3b}>{p[21]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>23</Text>
                    <Text style={styles.t3b}>{p[22]}</Text>
                </View>

                <View style={styles.block}>
                    <Text style={styles.num}>24</Text>
                    <Text style={styles.t3b}>{p[23]}</Text>
                </View>

                <View style={styles.lblock}>
                    <Text style={styles.num}>25</Text>
                    <Text style={styles.t3b}>{p[24]}</Text>
                </View>

            </LinearGradient>

        </ScrollView>

    </View>

    // {/* </SafeAreaView> */}
  );
}


const styles1 = StyleSheet.create({
  ground:{
    flex:1,
      backgroundColor:"#6B8B8F",
    justifyContent:"flex-start"
  },

  background:{
    alignItems:"center",
    height:"100%",
    width:"100%",
    justifyContent:"flex-start"
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

  name:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#234952",
    width:"93%",
    height:120,
    margin:15,
    borderRadius:20,
  },

  block:{
    justifyContent:"center",
    alignItems:"center",
    width:"93%",
    flexDirection:"row",
    margin:15,
  },

  lblock:{
    justifyContent:"center",
    alignItems:"center",
    width:"93%",
    flexDirection:"row",
    marginTop:15,
    marginBottom:70
  },

  num:{
    fontSize:30,
    color:"gray",
    fontFamily:"medium",
    marginRight:15
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
    justifyContent:"flex-start"
  },

  background:{
    alignItems:"center",
    height:"100%",
    width:"100%",
    justifyContent:"flex-start"
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
    color:"#800000",
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
    color:"#fff",
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

  name:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
    width:"93%",
    height:120,
    margin:15,
    borderRadius:20,
  },

  block:{
    justifyContent:"center",
    alignItems:"center",
    width:"93%",
    flexDirection:"row",
    margin:15,
  },

  lblock:{
    justifyContent:"center",
    alignItems:"center",
    width:"93%",
    flexDirection:"row",
    marginTop:15,
    marginBottom:70
  },

  num:{
    fontSize:30,
    color:"gray",
    fontFamily:"medium",
    marginRight:15
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
    justifyContent:"flex-start"
  },

  background:{
    alignItems:"center",
    height:"100%",
    width:"100%",
    justifyContent:"flex-start"
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

  name:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#6D5EFF",
    width:"93%",
    height:120,
    margin:15,
    borderRadius:20,
  },

  block:{
    justifyContent:"center",
    alignItems:"center",
    width:"93%",
    flexDirection:"row",
    margin:15,
  },

  lblock:{
    justifyContent:"center",
    alignItems:"center",
    width:"93%",
    flexDirection:"row",
    marginTop:15,
    marginBottom:70
  },

  num:{
    fontSize:30,
    color:"gray",
    fontFamily:"medium",
    marginRight:15
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
    justifyContent:"flex-start"
  },

  background:{
    alignItems:"center",
    height:"100%",
    width:"100%",
    justifyContent:"flex-start"
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

  t2bb:{
    textAlign:"center",
    fontSize:17,
    color:"black",
    fontFamily:"thin"
  },

  t3b:{
    textAlign:"center",
    fontSize:20,
    color:"#fff",
    fontFamily:"medium",
    marginTop:15
  },
  
  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#fff",
    fontFamily:"medium",
    marginBottom:3
  }, 

  name:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#0D0091",
    width:"93%",
    height:120,
    margin:15,
    borderRadius:20,
  },

  block:{
    justifyContent:"center",
    alignItems:"center",
    width:"93%",
    flexDirection:"row",
    margin:15,
  },

  lblock:{
    justifyContent:"center",
    alignItems:"center",
    width:"93%",
    flexDirection:"row",
    marginTop:15,
    marginBottom:70
  },

  num:{
    fontSize:30,
    color:"gray",
    fontFamily:"medium",
    marginRight:15
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