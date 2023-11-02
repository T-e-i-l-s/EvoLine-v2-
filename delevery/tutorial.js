
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet, View, Text, Button , Image , Linking} from "react-native";


export default function App({navigation}) {

    const toitems = () => {
      navigation.navigate("items")
    }

  return (
    <SafeAreaView style={styles.ground}>


    {/* <View style={styles.ground}> */}

        <Text style={styles.title}>Инструкция:</Text>


        <Text style={styles.text}>{"1.Примите правила использования"}</Text>
        <Text style={styles.text}>{"2.Соберите свой заказ"}</Text>
        <Text style={styles.text}>{"3.Отправьте деньги на карту"}</Text>
        <Text style={styles.text}>{"4.Ожидайте"}</Text>

        <View style={styles.but} onStartShouldSetResponder={toitems}>
            <Text style={styles.title}>Собрать заказ</Text>
        </View>

    {/* </View> */}

    </SafeAreaView>
  );
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
    fontSize:18,
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

