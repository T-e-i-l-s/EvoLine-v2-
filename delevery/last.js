
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Text, Button , Image , Linking} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';



export default function App({navigation}) {

  const [sum,ssum] = useState("-")

  AsyncStorage.getItem("sum").then(value => {
    ssum(value)
  })

  const touser = () => {
    navigation.navigate("user")
  }


    return (
        <SafeAreaView style={styles.ground}>


        {/* <View style={styles.ground}> */}

            <Text style={styles.title}>Сумма: {sum} рублей</Text>

            <Text style={styles.title}>Номер для перевода (переводить через сбп на QIWI): 89872060903</Text>

            <Text style={styles.text}>1.Переведите указанную сумму на номер, обязательно укажите ваше ФИО при переводе:</Text>
            <Text style={styles.text}>2.Ожидайте</Text>

            <View style={styles.but} onStartShouldSetResponder={touser}>
                <Text style={styles.title}>На главную</Text>
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

