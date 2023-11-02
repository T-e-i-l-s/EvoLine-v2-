
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from "react";
import { StyleSheet, View, Text, Button , Image , ScrollView} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';




export default function App({navigation}) {

  return (
    // <SafeAreaView style={styles.ground}>


    <View style={styles.ground}>

        <ScrollView>

            <LinearGradient
                // Background Linear Gradient
                colors={["#800000","#E7EDFF"]}
                style={styles.background}
            >

                <Text style={styles.title1}>EvoLine, что нового?</Text>

                <Text style={styles.text1}>Данная версия EvoLine, была написана с нуля, за неделю каникул,
                     за это время мы создали совершенно новый дизайн, составили 4 новых темы, 
                     создали регистрацию, систему достижений, упростили интерфейс и добавили доставку
                </Text>


                <Text style={styles.title2}>Почему с нуля?</Text>     

                <Text style={styles.text2}>За 2 месяца полноценной работы первой версии мы нашли много проблем, багов и недостатков, 
                    мы посчитали более быстрым и правильным способом создать новое приложение, чем искать ошибки в старом, 
                    так же благодаря этому используя ваш пользовательский опыт мы подстроили приложение под вас.
                </Text>
                

                <Text style={styles.title3}>Дз будет верное?</Text>     

                <Text style={styles.text3}>Почти весь октябрь домашнее задание заполнял Арслан, он показал себя как лучшего, 
                    благодаря этому ошибок в дз мало и они незначительны.
                </Text>
                

                <Text style={styles.title4}>Что с EvoBot?</Text>     

                <Text style={styles.text4}>Со второй четверти он работает на лицеевском сервере и должен быть стабильным.
                </Text>


            </LinearGradient>

        </ScrollView>

    </View>

    // {/* </SafeAreaView> */}
  );
}


const styles = StyleSheet.create({
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
  
  title1:{
    marginTop:50,
    fontSize:27,
    color:"#c8c8c8",
    fontFamily:"medium",
    paddingBottom:5
  },

  text1:{
    fontSize:19,
    color:"#c8c8c8",
    fontFamily:"medium",
    padding:15,
    textAlign:"center"
  },



  title2:{
    marginTop:50,
    fontSize:27,
    color:"#303030",
    fontFamily:"medium",
    paddingBottom:5
  },

  text2:{
    fontSize:19,
    color:"#303030",
    fontFamily:"medium",
    padding:15,
    textAlign:"center"
  },

  

  title3:{
    marginTop:50,
    fontSize:27,
    color:"#141414",
    fontFamily:"medium",
    paddingBottom:5
  },

  text3:{
    fontSize:19,
    color:"#141414",
    fontFamily:"medium",
    padding:15,
    textAlign:"center"
  },

  

  title4:{
    marginTop:50,
    fontSize:27,
    color:"black",
    fontFamily:"medium",
    paddingBottom:5
  },

  text4:{
    fontSize:19,
    color:"black",
    fontFamily:"medium",
    padding:15,
    textAlign:"center",
    marginBottom:100
  },


});