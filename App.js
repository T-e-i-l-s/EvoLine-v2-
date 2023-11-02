
import Base from "./navigate";

import * as Font from 'expo-font';


Font.loadAsync({
  'medium': require('./assets/fonts/Raleway-Medium.ttf'),
  'thin': require('./assets/fonts/Raleway-Regular.ttf'),
});


export default function App() {
  
  return (
    <Base/>
  );
  
}



// import { StyleSheet, View, Text} from "react-native";

// export default function App({navigation}) {

//   return (
//     // <SafeAreaView style={styles.ground}>


//     <View style={styles.ground}>

//       <Text>EvoLine закрыт на неопределенный срок!</Text>

//     </View>

//     // {/* </SafeAreaView> */}
//   );
// }


// const styles = StyleSheet.create({
//   ground:{
//     flex:1,
//     justifyContent:"center",
//     alignItems:"center"
//   }
// });
