
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from "react";
import { StyleSheet, View, Text, Button , Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import * as Font from 'expo-font';



Font.loadAsync({
  'medium': require('./assets/fonts/Raleway-Medium.ttf'),
  'thin': require('./assets/fonts/Raleway-Regular.ttf'),
});


export default function App({navigation}) {


  return (
    // <SafeAreaView style={styles.ground}>

      
    <View style={styles.ground}>


      
      {/* header */}
      <View style={styles.header}>
        <View style={styles.name}>
          <Text style={styles.t3}>Иван Иванов</Text>
          {/* <Text style={styles.t1}></Text> */}
        </View>
        <View style={styles.set}>
          <Text style={styles.sett}>⚙️</Text>
        </View>
      </View>


      {/* timetable*/}
        {/* title*/}
        <View style={styles.title}>
          <Text style={styles.t3}>Расписание на:</Text>
        </View>

        {/* dayline */}
        <View style={styles.dayline}>
          <Text style={styles.t2}>{"<"}</Text>
          <Text style={styles.t2}>Понедельник</Text>
          <Text style={styles.t2}>{">"}</Text>
        </View >

        {/* lessons */}
        <View style={styles.l1}>  
          <Text style={styles.t1b}>Физика(201)</Text>  
        </View>

        <View style={styles.l2}>  
          <Text style={styles.t1b}>Физика(201)</Text>  
        </View>

        <View style={styles.l1}>  
          <Text style={styles.t1b}>Физика(201)</Text>  
        </View>

        <View style={styles.l2}>  
          <Text style={styles.t1b}>Физика(201)</Text>  
        </View>

        <View style={styles.l1}>  
          <Text style={styles.t1b}>Физика(201)</Text>  
        </View>

        <View style={styles.l2}>  
          <Text style={styles.t1b}>Физика(201)</Text>  
        </View>

        <View style={styles.l1}>  
          <Text style={styles.t1b}>Физика(201)</Text>  
        </View>

        <View style={styles.l2}>  
          <Text style={styles.t1b}>Физика(201)</Text>  
        </View>


        {/* my home work */}
        <View style={styles.myhw}>
          <Text style={styles.t3}>Мои задания</Text>
        </View>



      {/* deztable */}
      <View style={styles.dez}>
        <Text style={styles.t3b}>Дежурит сегодня:</Text>
        <Text style={styles.t2b}>Мустафин Карим</Text>
      </View>
      <View style={styles.dezlist}>
        <Text style={styles.t31}>Список дежурства</Text>
      </View>
      


      {/* nav panel */}
      <View style={styles.navpan}>

        <View style={styles.anavbut}>
          <Image
            style={styles.img}
            source={require('./assets/icons/home.png')}
          />
        </View>

        <View style={styles.navbut}>
          <Image
            style={styles.img}
            source={require('./assets/icons/book.png')}
          />
          
        </View>

        <View style={styles.navbut}>
          <Image
            style={styles.img}
            source={require('./assets/icons/face.png')}
          />
        </View>

        
      </View>

    </View>
      
    // </SafeAreaView>
  );
}


  
const styles = StyleSheet.create({
  ground:{
    backgroundImage:require('./assets/splash.png'),
    flex:1,
    alignItems:"center"
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
    marginBottom:3
  },

  t31:{
    fontSize:19,
    color:"#fff",
    fontFamily:"medium",
    marginBottom:3
  },


  t1b:{
    fontSize:16,
    color:"black",
    fontFamily:"thin"
  },

  t2b:{
    fontSize:17,
    color:"black",
    fontFamily:"thin"
  },

  t3b:{
    fontSize:20,
    color:"black",
    fontFamily:"medium",
    marginBottom:3
  },

  header:{
    width:"97%",
    height:"15%",
    flexDirection:"row",
    marginTop:11,
    marginBottom:7
  },

  name:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#800000",
    height:"100%",
    width:"70%",
    borderRadius:40
  },

  set:{
    height:"100%",
    width:"30%"
  },

  sett:{
    fontSize:40
  },

  title:{
    alignItems:"center",
    justifyContent:"center",
    width:"97%",
    height:"8%",
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    backgroundColor:"#800000"
  },
  dayline:{
    alignItems:"center",
    justifyContent:"center",
    width:"97%",
    height:"5%",
    backgroundColor:"#b00000",
    flexDirection:"row"
  },
  l1:{
    alignItems:"center",
    justifyContent:"center",
    width:"97%",
    height:"5%",
    backgroundColor:"#b4b4b4",
  },
  l2:{
    alignItems:"center",
    justifyContent:"center",
    width:"97%",
    height:"5%",
    backgroundColor:"#c1c1c1",
  },
  myhw:{
    alignItems:"center",
    justifyContent:"center",
    width:"97%",
    height:"8%",
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40,
    backgroundColor:"#800000"
  },

  dez:{
    alignItems:"center",
    justifyContent:"center",
    width:"97%",
    height:"8%",
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    backgroundColor:"#c1c1c1",
    marginTop:7
  },

  dezlist:{
    alignItems:"center",
    justifyContent:"center",
    width:"97%",
    height:"5%",
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40,
    backgroundColor:"#800000",
    marginBottom:7
  },

  navpan:{
    alignItems:"center",
    width:"100%",
    height:"7%",
    flexDirection:"row"
  },
  anavbut:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#b4b4b4",
    height:"100%",
    width:"33%",
  },
  navbut:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#c1c1c1",
    height:"100%",
    width:"34%",
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