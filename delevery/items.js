
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet, View, Text, Button , Image , Linking} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



var b1 = 0
var b2 = 0
var b3 = 0
var b4 = 0
var b5 = 0


var r1 = 0
var r2 = 0
var r3 = 0
var r4 = 0
var r5 = 0


var s1 = 0
var s2 = 0
var s3 = 0
var s4 = 0
var s5 = 0


var p1 = 0
var p2 = 0
var p3 = 0
var p4 = 0
var p5 = 0


var w1 = 0
var w2 = 0

var sum = 0

var list = ""

export default function App({navigation}) {

  const [b1s,sb1s] = useState("")
  const [b2s,sb2s] = useState("")
  const [b3s,sb3s] = useState("")
  const [b4s,sb4s] = useState("")
  const [b5s,sb5s] = useState("")

  const [r1s,sr1s] = useState("")
  const [r2s,sr2s] = useState("")
  const [r3s,sr3s] = useState("")
  const [r4s,sr4s] = useState("")
  const [r5s,sr5s] = useState("")

  const [s1s,ss1s] = useState("")
  const [s2s,ss2s] = useState("")
  const [s3s,ss3s] = useState("")
  const [s4s,ss4s] = useState("")
  const [s5s,ss5s] = useState("")

  const [p1s,sp1s] = useState("")
  const [p2s,sp2s] = useState("")
  const [p3s,sp3s] = useState("")
  const [p4s,sp4s] = useState("")
  const [p5s,sp5s] = useState("")

  const [w1s,sw1s] = useState("")
  const [w2s,sw2s] = useState("")


  const sb1 = () =>{ 
    price = 175
    if (b1 == 0) {
        sum = sum + price
        b1 = 1  
        sb1s("В корзине")
    } else {
        sum = sum - price
        b1 = 0
        sb1s("")
    }
  }  
  const sb2 = () =>{ 
    price = 100
    if (b2 == 0) {
        sum = sum + price
        b2 = 1  
        sb2s("В корзине")
    } else {
        sum = sum - price
        b2 = 0
        sb2s("")
    }
  }  
  const sb3 = () =>{ 
    price = 110
    if (b3 == 0) {
        sum = sum + price
        b3 = 1  
        sb3s("В корзине")
    } else {
        sum = sum - price
        b3 = 0
        sb3s("")
    }
  }  
  const sb4 = () =>{ 
    price = 190
    if (b4 == 0) {
        sum = sum + price
        b4 = 1  
        sb4s("В корзине")
    } else {
        sum = sum - price
        b4 = 0
        sb4s("")
    }
  }  
  const sb5 = () =>{ 
    price = 205
    if (b5 == 0) {
        sum = sum + price
        b5 = 1  
        sb5s("В корзине")
    } else {
        sum = sum - price
        b5 = 0
        sb5s("")
    }
  }  



  const sr1 = () =>{ 
    price = 150
    if (r1 == 0) {
        sum = sum + price
        r1 = 1  
        sr1s("В корзине")
    } else {
        sum = sum - price
        r1 = 0
        sr1s("")
    }
  }  
  const sr2 = () =>{ 
    price = 150
    if (r2 == 0) {
        sum = sum + price
        r2 = 1  
        sr2s("В корзине")
    } else {
        sum = sum - price
        r2 = 0
        sr2s("")
    }
  }  
  const sr3 = () =>{ 
    price = 110
    if (r3 == 0) {
        sum = sum + price
        r3 = 1  
        sr3s("В корзине")
    } else {
        sum = sum - price
        r3 = 0
        sr3s("")
    }
  }  
  const sr4 = () =>{ 
    price = 190
    if (r4 == 0) {
        sum = sum + price
        r4 = 1  
        sr4s("В корзине")
    } else {
        sum = sum - price
        r4 = 0
        sr4s("")
    }
  }  
  const sr5 = () =>{ 
    price = 180
    if (r5 == 0) {
        sum = sum + price
        r5 = 1  
        sr5s("В корзине")
    } else {
        sum = sum - price
        r5 = 0
        sr5s("")
    }
  }  


  const ss1 = () =>{ 
    price = 160
    if (s1 == 0) {
        sum = sum + price
        s1 = 1  
        ss1s("В корзине")
    } else {
        sum = sum - price
        s1 = 0
        ss1s("")
    }
  }  
  const ss2 = () =>{ 
    price = 185
    if (s2 == 0) {
        sum = sum + price
        s2 = 1  
        ss2s("В корзине")
    } else {
        sum = sum - price
        s2 = 0
        ss2s("")
    }
  }  
  const ss3 = () =>{ 
    price = 200
    if (s3 == 0) {
        sum = sum + price
        s3 = 1  
        ss3s("В корзине")
    } else {
        sum = sum - price
        s3 = 0
        ss3s("")
    }
  }  
  const ss4 = () =>{ 
    price = 205
    if (s4 == 0) {
        sum = sum + price
        s4 = 1  
        ss4s("В корзине")
    } else {
        sum = sum - price
        s4 = 0
        ss4s("")
    }
  }  
  const ss5 = () =>{ 
    price = 220
    if (s5 == 0) {
        sum = sum + price
        s5 = 1  
        ss5s("В корзине")
    } else {
        sum = sum - price
        s5 = 0
        ss5s("")
    }
  }  


  const sp1 = () =>{ 
    price = 125
    if (p1 == 0) {
        sum = sum + price
        p1 = 1  
        sp1s("В корзине")
    } else {
        sum = sum - price
        p1 = 0
        sp1s("")
    }
  }  
  const sp2 = () =>{ 
    price = 130
    if (p2 == 0) {
        sum = sum + price
        p2 = 1  
        sp2s("В корзине")
    } else {
        sum = sum - price
        p2 = 0
        sp2s("")
    }
  }  
  const sp3 = () =>{ 
    price = 150
    if (p3 == 0) {
        sum = sum + price
        p3 = 1  
        sp3s("В корзине")
    } else {
        sum = sum - price
        p3 = 0
        sp3s("")
    }
  }  
  const sp4 = () =>{ 
    price = 115
    if (p4 == 0) {
        sum = sum + price
        p4 = 1  
        sp4s("В корзине")
    } else {
        sum = sum - price
        p4 = 0
        sp4s("")
    }
  }  
  const sp5 = () =>{ 
    price = 115
    if (p5 == 0) {
        sum = sum + price
        p5 = 1  
        sp5s("В корзине")
    } else {
        sum = sum - price
        p5 = 0
        sp5s("")
    }
  }  


  const sw1 = () =>{ 
    price = 60
    if (w1 == 0) {
        sum = sum + price
        w1 = 1  
        sw1s("В корзине")
    } else {
        sum = sum - price
        w1 = 0
        sw1s("")
    }
  }  
  const sw2 = () =>{ 
    price = 70
    if (w2 == 0) {
        sum = sum + price
        w2 = 1  
        sw2s("В корзине")
    } else {
        sum = sum - price
        w2 = 0
        sw2s("")
    }
  }  


  const toinfo = () => {
    AsyncStorage.setItem("sum",String(sum + 30))


    if(b1 == 1){list = list + "Чикен фреш, "}
    if(b2 == 1){list = list + "Гамбургер, "}
    if(b3 == 1){list = list + "Чизбургер, "}
    if(b4 == 1){list = list + "Дабл биф, "}
    if(b5 == 1){list = list + "Биф бургер, "}


    if(r1 == 1){list = list + "Фреш ролл, "}
    if(r2 == 1){list = list + "Цезарь ролл, "}
    if(r3 == 1){list = list + "Биф ролл, "}
    if(r4 == 1){list = list + "BBQ ролл, "}
    if(r5 == 1){list = list + "Стейк ролл, "}


    if(s1 == 1){list = list + "Пита с картошкой, "}
    if(s2 == 1){list = list + "Шаурма с курицей, "}
    if(s3 == 1){list = list + "Шаурма греческая, "}
    if(s4 == 1){list = list + "Шаурма фирменная, "}
    if(s5 == 1){list = list + "Шаурма маг-тести, "}


    if(p1 == 1){list = list + "пицца " + "Сборная, "}
    if(p2 == 1){list = list + "пицца " + "Цезарь, "}
    if(p3 == 1){list = list + "пицца " + "Три сыра, "}
    if(p4 == 1){list = list + "пицца " + "С курицей, "}
    if(p5 == 1){list = list + "пицца " + "Грибная, "}


    if(w1 == 1){list = list + "Морс, "}
    if(w2 == 1){list = list + "Айран, "}

    AsyncStorage.setItem("list",list)
    
    list = ""
    b1 = 0
    b2 = 0
    b3 = 0
    b4 = 0
    b5 = 0
    r1 = 0
    r2 = 0
    r3 = 0
    r4 = 0
    r5 = 0
    s1 = 0
    s2 = 0
    s3 = 0
    s4 = 0
    s5 = 0
    p1 = 0
    p2 = 0
    p3 = 0
    p4 = 0
    p5 = 0
    w1 = 0
    w2 = 0
    sum = 0

    navigation.navigate("info")
  }

  return (
    <SafeAreaView style={styles.ground}>


    {/* <View style={styles.ground}> */}
        <ScrollView>
            <Text style={styles.title}>Чтобы добавить в корзину нажмите на название</Text>

            <Text style={styles.title}>Бургеры</Text>
            <ScrollView style={styles.line} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.item2}>
                </View>
                <View style={styles.item2}>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title0} onPress={sb1}>Чикен фреш</Text>
                    <Text style={styles.text} onPress={sb1}>175р</Text>
                    <Text style={styles.text}>{b1s}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title} onPress={sb2}>Гамбургер</Text>
                    <Text style={styles.text} onPress={sb2}>100р</Text>
                    <Text style={styles.text}>{b2s}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title} onPress={sb3}>Чизбургер</Text>
                    <Text style={styles.text} onPress={sb3}>110р</Text>
                    <Text style={styles.text}>{b3s}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title} onPress={sb4}>Дабл биф</Text>
                    <Text style={styles.text} onPress={sb4}>190р</Text>
                    <Text style={styles.text}>{b4s}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title} onPress={sb5}>Биф бургер</Text>
                    <Text style={styles.text} onPress={sb5}>205р</Text>
                    <Text style={styles.text}>{b5s}</Text>
                </View>
            </ScrollView>



            <Text style={styles.title}>Роллы</Text>
            <ScrollView style={styles.line} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.item2}>
                </View>
                <View style={styles.item2}>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title0} onPress={sr1}>Фреш ролл</Text>
                    <Text style={styles.text} onPress={sr1}>150р</Text>
                    <Text style={styles.text}>{r1s}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title0} onPress={sr2}>Цезарь ролл</Text>
                    <Text style={styles.text} onPress={sr2}>150р</Text>
                    <Text style={styles.text}>{r2s}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title0} onPress={sr3}>Биф ролл</Text>
                    <Text style={styles.text} onPress={sr3}>110р</Text>
                    <Text style={styles.text}>{r3s}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title0} onPress={sr4}>BBQ ролл</Text>
                    <Text style={styles.text} onPress={sr4}>190р</Text>
                    <Text style={styles.text}>{r4s}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title0} onPress={sr5}>Стейк ролл</Text>
                    <Text style={styles.text} onPress={sr5}>180р</Text>
                    <Text style={styles.text}>{r5s}</Text>
                </View>
            </ScrollView>



            <Text style={styles.title}>Шаверма</Text>
            <ScrollView style={styles.line3} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.item2}>
                </View>
                <View style={styles.item2}>
                </View>
                <View style={styles.item3}>
                    <Text style={styles.title0} onPress={ss1}>Пита с картошкой</Text>
                    <Text style={styles.text} onPress={ss1}>160р</Text>
                    <Text style={styles.text}>{s1s}</Text>
                </View>
                <View style={styles.item3}>
                    <Text style={styles.title0} onPress={ss2}>Шаурма с курицей</Text>
                    <Text style={styles.text} onPress={ss2}>185р</Text>
                    <Text style={styles.text}>{s2s}</Text>
                </View>
                <View style={styles.item3}>
                    <Text style={styles.title0} onPress={ss3}>Шаурма греческая</Text>
                    <Text style={styles.text} onPress={ss3}>200р</Text>
                    <Text style={styles.text}>{s3s}</Text>
                </View>
                <View style={styles.item3}>
                    <Text style={styles.title0} onPress={ss4}>Шаурма фирменная</Text>
                    <Text style={styles.text} onPress={ss4}>205</Text>
                    <Text style={styles.text}>{s4s}</Text>
                </View>
                <View style={styles.item3}>
                    <Text style={styles.title0} onPress={ss5}>Шаурма маг-тести</Text>
                    <Text style={styles.text} onPress={ss5}>220р</Text>
                    <Text style={styles.text}>{s5s}</Text>
                </View>
            </ScrollView>



            <Text style={styles.title}>Пицца</Text>
            <ScrollView style={styles.line} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.item2}>
                </View>
                <View style={styles.item2}>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title0} onPress={sp1}>Сборная</Text>
                    <Text style={styles.text} onPress={sp1}>125р</Text>
                    <Text style={styles.text}>{p1s}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title0} onPress={sp2}>Цезарь</Text>
                    <Text style={styles.text} onPress={sp2}>130р</Text>
                    <Text style={styles.text}>{p2s}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title0} onPress={sp3}>Три сыра</Text>
                    <Text style={styles.text} onPress={sp3}>150р</Text>
                    <Text style={styles.text}>{p3s}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title0} onPress={sp4}>С курицей</Text>
                    <Text style={styles.text} onPress={sp4}>115р</Text>
                    <Text style={styles.text}>{p4s}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title0} onPress={sp5}>Грибная</Text>
                    <Text style={styles.text} onPress={sp5}>115р</Text>
                    <Text style={styles.text}>{p5s}</Text>
                </View>
            </ScrollView>


            <Text style={styles.title}>Напитки</Text>
            <ScrollView style={styles.line} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.item}>
                    <Text style={styles.title0} onPress={sw1}>Морс</Text>
                    <Text style={styles.text} onPress={sw1}>60</Text>
                    <Text style={styles.text}>{w1s}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title0} onPress={sw2}>Айран</Text>
                    <Text style={styles.text} onPress={sw2}>70</Text>
                    <Text style={styles.text}>{w2s}</Text>
                </View>
            </ScrollView>

        
        </ScrollView>

        
        <View style={styles.but} onStartShouldSetResponder={toinfo}>
            <Text style={styles.title}>Готово</Text>
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

  title0:{
    fontSize:18,
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
  },

  line:{
    justifyContent:"center",
    alignItems:"flex-start",
    flexDirection:"row",
    height:120,
    marginBottom:7,
  },

  line3:{
    justifyContent:"center",
    alignItems:"flex-start",
    flexDirection:"row",
    height:150,
    marginBottom:7,
  },

  item:{
    justifyContent:"center",
    alignItems:"center",
    height:120,
    width:150,
    backgroundColor:"#d32f2e",
    borderRadius:20,
    marginHorizontal:7
  },

  item2:{
    justifyContent:"center",
    alignItems:"center",
    height:120,
    width:230,
    backgroundColor:"#bbdefa",
    borderRadius:20,
    marginHorizontal:7
  },

  item3:{
    justifyContent:"center",
    alignItems:"center",
    height:150,
    width:150,
    backgroundColor:"#d32f2e",
    borderRadius:20,
    marginHorizontal:7
  },

  but:{
    justifyContent:"center",
    alignItems:"center",
    width:"50%",
    height:"8%",
    backgroundColor:"#800000",
    borderRadius:20,
    margin:7
  },

});

