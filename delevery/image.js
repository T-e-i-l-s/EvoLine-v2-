
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet, View, Text, Button , Image , Linking} from "react-native";


export default function App({navigation}) {

  const toarg = () => {
    navigation.navigate("agr")
  }


  setTimeout(() => {
    toarg()
  }, 1000);



  return (
    <SafeAreaView style={styles.ground}>


    {/* <View style={styles.ground}> */}

        <Image
          style={styles.img}
          source={require("../assets/delivery/base.png")}
        />

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

  img:{
    height:300,
    width:300,
  },

});

