
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet, View, Text, Button , Image , Linking} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';


export default function App({navigation}) {

    const totut = () => {
      navigation.navigate("tut")
    }
    const touser = () => {
      navigation.navigate("user")
    }

  return (
    <SafeAreaView style={styles.ground}>


      <ScrollView> 

        <View style={styles.view}>

          <Text style={styles.title}>Чтобы использовать эту функцию вы должны принять эти пункты:</Text>


          <Text style={styles.text}>{"1)При изменении цены не более чем на 20 рублей, вы обязаны вернуть средства, которые не вошли в начальный расчет, иначе покупка этого товара несовершается."}</Text>
          <Text style={styles.text}>{"2)В случае, если заказчик при переводе денежных средств не указывает свои настоящие данные(ФИО), или полученные деньги отправлены не в полном размере, заказ обнуляется, а средства возвращаются в полном размере."}</Text>
          <Text style={styles.text}>{"3)Полученные заказы не подлежат возврату."}</Text>
          <Text style={styles.text}>{"4)При неполучении заказа в срок(до отбоя в день заказа) средства возвращаются в полном размере."}</Text>
          <Text style={styles.text}>{"5)При неполном получении заказа средства за неполученный товар возвращаются в полном размере."}</Text>
          <Text style={styles.text2}>{"6)Доставка стоит 30 рублей."}</Text>

          <View style={styles.but} onStartShouldSetResponder={totut}>
              <Text style={styles.title}>Принимаю</Text>
          </View>
          <View style={styles.but} onStartShouldSetResponder={touser}>
              <Text style={styles.title}>На главную</Text>
          </View>


        </View>

      </ScrollView>

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

  view:{
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
    marginHorizontal:10,
    marginVertical:4,
  },

  text2:{
    fontSize:16,
    color:"#fff",
    fontFamily:"medium",
    paddingBottom:5,
    textAlign:"center",
    marginHorizontal:10,
    marginTop:4,
    marginBottom:10,
  },

  but:{
    justifyContent:"center",
    alignItems:"center",
    width:"50%",
    height:"8%",
    backgroundColor:"#d32f2e",
    borderRadius:20,
    marginBottom:7,
    marginTop:3
  },

});

