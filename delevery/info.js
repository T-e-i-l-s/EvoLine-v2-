
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet, View, Text, Button , Image , Linking} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useState } from 'react';


export default function App({navigation}) {

  const [sum,ssum] = useState("-")
  const [list,slist] = useState("-")

  AsyncStorage.getItem("sum").then(value => {
    ssum(value)
  })

  AsyncStorage.getItem("list").then(value => {
    slist(value)
  })

  const tolast = () => {
    navigation.navigate("reg2")
  }






//   const [a,sa] = useState(1)


//   if (a == 3){
//     sa(1)
//   }else if (a == 1){
//     if(res == 0){
//       res = 1
//       setInterval(function(){
//         sa(3)
//       },300)
//     }
    return (
        <SafeAreaView style={styles.ground}>


        {/* <View style={styles.ground}> */}

            <Text style={styles.title}>Проверьте заказ: {list}</Text>
            <Text style={styles.title}>Сумма: {sum} рублей</Text>

            <View style={styles.but} onStartShouldSetResponder={tolast}>
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

});

