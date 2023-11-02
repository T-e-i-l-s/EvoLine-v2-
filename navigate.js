import Home from "./Components/timetable";
import Myhw from "./Components/hw";
import User from "./Components/user";
import Settings from "./Components/settings";
import Dezlist from "./Components/dezlist";
import Top from "./Components/top";
import Achiv from "./Components/myachiv";
import Reg from "./Components/reg";
import Update from "./Components/update";
import Ev1 from "./events/evo2";
import Ev2 from "./events/facts";


import Img from "./delevery/image";
import Arg from "./delevery/agr";
import Tut from "./delevery/tutorial";
import Items from "./delevery/items";
import Last from "./delevery/last";
import Info from "./delevery/info";
import Reg2 from "./delevery/reg";




import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();


export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            
            <Stack.Screen
                name="user"
                component={User}
                options={{headerShown: false,
                        animationEnabled:false}}
            />
            <Stack.Screen
                name="home"
                component={Home}
                options={{headerShown: false,
                    animationEnabled:false}}
            />
            <Stack.Screen
                name="hw"
                component={Myhw}
                options={{headerShown: false,
                    animationEnabled:false}}
            />
            <Stack.Screen
                name="settings"
                component={Settings}
                options={{title: 'Настройки'}}
            />
            <Stack.Screen
                name="dez"
                component={Dezlist}
            />
            <Stack.Screen
                name="top"
                component={Top}
                options={{title: 'Рейтинг'}}
            />
            <Stack.Screen
                name="achiv"
                component={Achiv}
                options={{title: 'Мои достижения'}}
            />
            <Stack.Screen
                name="reg"
                component={Reg}
                options={{headerShown: false}}
            />            
            <Stack.Screen
                name="update"
                component={Update}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="ev1"
                component={Ev1}
                options={{title: 'Что нового?'}}
            />
            <Stack.Screen
                name="facts"
                component={Ev2}
                options={{title: 'Факты'}}
            />


            
            <Stack.Screen
                name="img"
                component={Img}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="agr"
                component={Arg}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="tut"
                component={Tut}
                options={{title: 'Как заказать?'}}
            />
            <Stack.Screen
                name="items"
                component={Items}
                options={{title: 'Меню'}}
            />
            <Stack.Screen
                name="last"
                component={Last}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="info"
                component={Info}
                options={{title: 'Проверьте заказ'}}
            />
            <Stack.Screen
                name="reg2"
                component={Reg2}
                options={{headerShown: false}}
            />
            
            

        </Stack.Navigator>
    </NavigationContainer>
}