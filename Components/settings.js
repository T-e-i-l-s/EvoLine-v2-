
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from "react";
import { StyleSheet, View, Text, Button , Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import AsyncStorage from '@react-native-async-storage/async-storage';


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

  const toUpdate = () => {
    navigation.navigate("update")
  }

  const reset = () => {
    AsyncStorage.setItem("userName",    "")
    AsyncStorage.setItem("userSurame",  "")
    AsyncStorage.setItem("userFathName","")
    toUpdate()
  }

  const s1 = () => {
    AsyncStorage.setItem("style","1") 
    touser()
  }
  const s2 = () => {
    AsyncStorage.setItem("style","2") 
    touser()
  }
  const s3 = () => {
    AsyncStorage.setItem("style","3") 
    touser()
  }
  const s4 = () => {
    AsyncStorage.setItem("style","4") 
    touser()
  }



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



  return (
    // <SafeAreaView style={styles.ground}>


    <View style={styles.ground}>

      <LinearGradient
        // Background Linear Gradient
        colors={clrs}
        style={styles.background}
      >

      {/* thems */}
      <Text style={styles.t3b}>Темы:</Text>

      <View style={styles.thems}>
        <View style={styles.them} onStartShouldSetResponder={s1}>

            <View style={styles.them11}>
              <Text style={styles.t2}>EvoLine</Text> 
            </View>

            <View style={styles.them12}>
              <Text style={styles.t2}>Основная</Text>
            </View>

        </View>
        <View style={styles.them} onStartShouldSetResponder={s2}>

            <View style={styles.them21}>
              <Text style={styles.t2}>EvoLine</Text>   
            </View>

            <View style={styles.them22}>
              <Text style={styles.t2bb}>Старая</Text>    
            </View>

        </View>
      </View>  

      <View style={styles.thems}>
        <View style={styles.them} onStartShouldSetResponder={s3}>

            <View style={styles.them31}>
              <Text style={styles.t2}>Я белый</Text>  
            </View>

            <View style={styles.them32}>
              <Text style={styles.t2b}>шкила</Text>    
            </View>

        </View>
        <View style={styles.them} onStartShouldSetResponder={s4}>

            <View style={styles.them41}> 
              <Text style={styles.t2}>Я черный</Text>  
            </View>

            <View style={styles.them42}> 
             <Text style={styles.t2}>шкила</Text>    
            </View>

        </View>
      </View>  

      <Text style={styles.t3b} onPress={reset}>Выйти из акаунта</Text>


      </LinearGradient>

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

  
  thems:{
    justifyContent:"center",
    alignItems:"flex-start",
    flexDirection:"row",
    marginBottom:15,
    padding:10,
  },

  them:{
    justifyContent:"center",
    alignItems:"center",
    height:150,
    width:150,
    marginHorizontal:7,
    borderWidth:1,
    borderColor:"gray",
    borderRadius:15
  },

  them11:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:"#234952"
  }, 
  
  them12:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    backgroundColor:"#6B8B8F"
  },

  them21:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:"#800000"
  }, 
  
  them22:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    backgroundColor:"white"
  },

  them31:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:"#6D5EFF"
  }, 
  
  them32:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    backgroundColor:"white"
  },

  them41:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:"#6D5EFF"
  }, 
  
  them42:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    backgroundColor:"black"
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

  
  thems:{
    justifyContent:"center",
    alignItems:"flex-start",
    flexDirection:"row",
    marginBottom:15,
    padding:10,
  },

  them:{
    justifyContent:"center",
    alignItems:"center",
    height:150,
    width:150,
    marginHorizontal:7,
    borderWidth:1,
    borderColor:"gray",
    borderRadius:15
  },

  them11:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:"#234952"
  }, 
  
  them12:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    backgroundColor:"#6B8B8F"
  },

  them21:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:"#800000"
  }, 
  
  them22:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    backgroundColor:"white"
  },

  them31:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:"#6D5EFF"
  }, 
  
  them32:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    backgroundColor:"white"
  },

  them41:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:"#6D5EFF"
  }, 
  
  them42:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    backgroundColor:"black"
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

  
  thems:{
    justifyContent:"center",
    alignItems:"flex-start",
    flexDirection:"row",
    marginBottom:15,
    padding:10,
  },

  them:{
    justifyContent:"center",
    alignItems:"center",
    height:150,
    width:150,
    marginHorizontal:7,
    borderWidth:1,
    borderColor:"gray",
    borderRadius:15
  },

  them11:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:"#234952"
  }, 
  
  them12:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    backgroundColor:"#6B8B8F"
  },

  them21:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:"#800000"
  }, 
  
  them22:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    backgroundColor:"white"
  },

  them31:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:"#6D5EFF"
  }, 
  
  them32:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    backgroundColor:"white"
  },

  them41:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:"#6D5EFF"
  }, 
  
  them42:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    backgroundColor:"black"
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
    color:"black",
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

  
  thems:{
    justifyContent:"center",
    alignItems:"flex-start",
    flexDirection:"row",
    marginBottom:15,
    padding:10,
  },

  them:{
    justifyContent:"center",
    alignItems:"center",
    height:150,
    width:150,
    marginHorizontal:7,
    borderWidth:1,
    borderColor:"gray",
    borderRadius:15
  },

  them11:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:"#234952"
  }, 
  
  them12:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    backgroundColor:"#6B8B8F"
  },

  them21:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:"#800000"
  }, 
  
  them22:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    backgroundColor:"white"
  },

  them31:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:"#6D5EFF"
  }, 
  
  them32:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    backgroundColor:"white"
  },

  them41:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:"#6D5EFF"
  }, 
  
  them42:{
    justifyContent:"center",
    alignItems:"center",
    height:"50%",
    width:"100%",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    backgroundColor:"black"
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