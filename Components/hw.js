
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from "react";
import { StyleSheet, View, Text, Button , Image, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

var wrt = 0

const firebase = require("firebase")
require("firebase/firestore")
const db = firebase.firestore();

var hw = ["1","2","3","4","5","6","7",
"8","9","10","11","12","13","14",
"15","16","17","18","19","20","21","22"]

var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var wd = date.getUTCDay();
if (wd == 0){
  wd = 7
}

export default function App({navigation}) {


  const tohome = () => {
     navigation.navigate("home")
  }

  const tohw = () => {
    navigation.navigate("hw")
  }

  const touser = () => {
    navigation.navigate("user")
  }

  const toset = () => {
    navigation.navigate("settings")
  }

  const todez = () => {
    navigation.navigate("dez")
  }


  var ref1 = require("../assets/icons/home.png")
  var ref2 = require("../assets/icons/abook.png")
  var ref3 = require("../assets/icons/face.png")

  const [stl,sstyle] = useState("0")
  var clrs = ['#6B8B8F', '#B4EAF0']

  var styles = styles1
  AsyncStorage.getItem("style").then(value => {
    sstyle(value)
  })

  if (stl == "4"){
    styles = styles4
    clrs = ["black","black"]
  }else   if (stl == "3"){
    styles = styles3
    clrs = ['#E7EDFF', '#FFFFFF']
  }else   if (stl == "2"){
    styles = styles2
    clrs = ["#800000","#800000"]
    ref1 = require("../assets/icons/ghome.png")
    ref2 = require("../assets/icons/gabook.png")
    ref3 = require("../assets/icons/gface.png")
  }else{
    styles = styles1
    clrs = ['#6B8B8F', '#B4EAF0']
    ref1 = require("../assets/icons/ghome.png")
    ref2 = require("../assets/icons/gabook.png")
    ref3 = require("../assets/icons/gface.png")
  }



  const [l1,sl1] = useState("-")
  const [l2,sl2] = useState("-")
  const [l3,sl3] = useState("-")
  const [l4,sl4] = useState("-")
  const [l5,sl5] = useState("-")
  const [l6,sl6] = useState("-")
  const [l7,sl7] = useState("-")
  const [l8,sl8] = useState("-")

  const [l12,sl12] = useState("-")
  const [l22,sl22] = useState("-")
  const [l32,sl32] = useState("-")
  const [l42,sl42] = useState("-")
  const [l52,sl52] = useState("-")
  const [l62,sl62] = useState("-")
  const [l72,sl72] = useState("-")
  const [l82,sl82] = useState("-")

  const [l13,sl13] = useState("Биология")
  const [l23,sl23] = useState("Англ.яз")
  const [l33,sl33] = useState("Турецкий")
  const [l43,sl43] = useState("Род.лит")
  const [l53,sl53] = useState("ИЗО")
  const [l63,sl63] = useState("Англ.яз")
  const [l73,sl73] = useState("Англ.яз")
  const [l83,sl83] = useState("История")


  const [hw1,shw1] = useState("-")
  const [hw2,shw2] = useState("-")
  const [hw3,shw3] = useState("-")
  const [hw4,shw4] = useState("-")
  const [hw5,shw5] = useState("-")
  const [hw6,shw6] = useState("-")
  const [hw7,shw7] = useState("-")
  const [hw8,shw8] = useState("-")

  const [hw12,shw12] = useState("-")
  const [hw22,shw22] = useState("-")
  const [hw32,shw32] = useState("-")
  const [hw42,shw42] = useState("-")
  const [hw52,shw52] = useState("-")
  const [hw62,shw62] = useState("-")
  const [hw72,shw72] = useState("-")
  const [hw82,shw82] = useState("-")

  const [hw03,shw03] = useState("-")
  const [hw13,shw13] = useState("-")
  const [hw23,shw23] = useState("-")
  const [hw33,shw33] = useState("-")
  const [hw43,shw43] = useState("-")
  const [hw53,shw53] = useState("-")
  const [hw63,shw63] = useState("-")
  const [hw73,shw73] = useState("-")
  const [hw83,shw83] = useState("-")
  const [hw93,shw93] = useState("-")
  const [hw103,shw103] = useState("-")
  const [hw113,shw113] = useState("-")
  const [hw123,shw123] = useState("-")
  const [hw133,shw133] = useState("-")
  const [hw143,shw143] = useState("-")
  const [hw153,shw153] = useState("-")
  const [hw163,shw163] = useState("-")
  const [hw173,shw173] = useState("-")
  const [hw183,shw183] = useState("-")
  const [hw193,shw193] = useState("-")
  const [hw203,shw203] = useState("-")
  const [hw213,shw213] = useState("-")
  const [hw223,shw223] = useState("-")

  var cell = db.collection("Evo1").doc("timetable");
  cell.get().then((doc) => {
    var q = doc.data()

    if(wd == 1){
      sl1(q.m1)
      sl2(q.m2)
      sl3(q.m3)
      sl4(q.m4)
      sl5(q.m5)
      sl6(q.m6)
      sl7(q.m7)
      sl8(q.m8)
    }else if(wd == 2){ 
      sl1(q.tu1)
      sl2(q.tu2)
      sl3(q.tu3)
      sl4(q.tu4)
      sl5(q.tu5)
      sl6(q.tu6)
      sl7(q.tu7)
      sl8(q.tu8)
    }else if(wd == 3){
      sl1(q.w1)
      sl2(q.w2)
      sl3(q.w3)
      sl4(q.w4)
      sl5(q.w5)
      sl6(q.w6)
      sl7(q.w7)
      sl8(q.w8)
    }else if(wd == 4){
      sl1(q.th1)
      sl2(q.th2)
      sl3(q.th3)
      sl4(q.th4)
      sl5(q.th5)
      sl6(q.th6)
      sl7(q.th7)
      sl8(q.th8)
    }else if(wd == 5){
      sl1(q.f1)
      sl2(q.f2)
      sl3(q.f3)
      sl4(q.f4)
      sl5(q.f5)
      sl6(q.f6)
      sl7(q.f7)
      sl8(q.f8)
    }else if(wd == 6){
      sl1(q.s1)
      sl2(q.s2)
      sl3(q.s3)
      sl4(q.s4)
      sl5(q.s5)
      sl6(q.s6)
      sl7(q.s7)
      sl8(q.s8)
    }else if(wd == 7){
      sl1("-")
      sl2("-")
      sl3("-")
      sl4("-")
      sl5("-")
      sl6("-")
      sl7("-")
      sl8("-")
    }
    
    if(wd == 7){
      sl12(q.m1)
      sl22(q.m2)
      sl32(q.m3)
      sl42(q.m4)
      sl52(q.m5)
      sl62(q.m6)
      sl72(q.m7)
      sl82(q.m8)
    }else if(wd == 1){ 
      sl12(q.tu1)
      sl22(q.tu2)
      sl32(q.tu3)
      sl42(q.tu4)
      sl52(q.tu5)
      sl62(q.tu6)
      sl72(q.tu7)
      sl82(q.tu8)
    }else if(wd == 2){
      sl12(q.w1)
      sl22(q.w2)
      sl32(q.w3)
      sl42(q.w4)
      sl52(q.w5)
      sl62(q.w6)
      sl72(q.w7)
      sl82(q.w8)
    }else if(wd == 3){
      sl12(q.th1)
      sl22(q.th2)
      sl32(q.th3)
      sl42(q.th4)
      sl52(q.th5)
      sl62(q.th6)
      sl72(q.th7)
      sl82(q.th8)
    }else if(wd == 4){
      sl12(q.f1)
      sl22(q.f2)
      sl32(q.f3)
      sl42(q.f4)
      sl52(q.f5)
      sl62(q.f6)
      sl72(q.f7)
      sl82(q.f8)
    }else if(wd == 5){
      sl12(q.s1)
      sl22(q.s2)
      sl32(q.s3)
      sl42(q.s4)
      sl52(q.s5)
      sl62(q.s6)
      sl72(q.s7)
      sl82(q.s8)
    }else if(wd == 6){
      sl12("-")
      sl22("-")
      sl32("-")
      sl42("-")
      sl52("-")
      sl62("-")
      sl72("-")
      sl82("-")
    }
  })



  const subs = ["Алгебра","Биология","Турецкий(рус)","Турецкий(тат)",
                "География","Геометрия","ИЗО","Англ(сред)",
                "Англ(продв)","Информатика","История",
                "Литература","Музыка","Общество",
                "Род.лит(рус)", "Род.лит(тат)","Род.яз(рус)",
                "Род.яз(тат)","Русский язык","Технология",
                "Физика","Физ.культура"]

  const [    bi,setbi  ] = useState("-")
  const [   tu1,settu1  ] = useState("-")
  const [   tu2,settu2  ] = useState("-")
  const [    ge,setge  ] = useState("-")
  const [    ar,setar  ] = useState("-")
  const [   en1,seten1  ] = useState("-")
  const [   en2,seten2  ] = useState("-")
  const [    hi,sethi  ] = useState("-")
  const [    li,setli  ] = useState("-")
  const [ algeb,setalgeb  ] = useState("-")
  const [geomet,setgeomet  ] = useState("-")
  const [    mu,setmu  ] = useState("-")
  const [    ob,setob  ] = useState("-")
  const [  rol1,setrol1] = useState("-")
  const [  rol2,setrol2] = useState("-")
  const [   ro1,setro1 ] = useState("-")
  const [   ro2,setro2 ] = useState("-")
  const [    ru,setru  ] = useState("-")
  const [    te,sette  ] = useState("-")
  const [     p,setp   ] = useState("-")
  const [    ph,setph   ] = useState("-")
  const [   inf,setinfo   ] = useState("-")              

  var cell = db.collection("Evo1").doc("hw");
  cell.get().then((doc) => {
    var q = doc.data()
    if      (l1 == "Биология")      {shw1(q.bio   )}
    else if (l1 == "География")     {shw1(q.geo   )}
    else if (l1 == "ИЗО")           {shw1(q.art   )}
    else if (l1 == "История")       {shw1(q.his   )}
    else if (l1 == "Литература")    {shw1(q.lit   )}
    else if (l1 == "Геометрия")     {shw1(q.geom  )}
    else if (l1 == "Алгебра")       {shw1(q.alge  )}
    else if (l1 == "Музыка")        {shw1(q.mus   )}
    else if (l1 == "Общество")      {shw1(q.obs   )}
    else if (l1 == "Русский язык")  {shw1(q.rus   )}
    else if (l1 == "Технология")    {shw1(q.tec   )}
    else if (l1 == "Физ.культура")  {shw1(q.pe    )}
    else if (l1 == "Физика")        {shw1(q.physic)}
    else if (l1 == "Информатика")   {shw1(q.info  )}
    else if (l1 == "КЧ")            {shw1("В приложении нет дз для этого урока.")}
    else if (l1 == "-")             {shw1("-")}
    else if (l1.substring(0,5) == "Англ."){shw1("\n  сред.-" + q.eng1 + "\n" +  "  сильн.-" + q.eng2)}
    else if (l1.substring(0,5) == "Род.л"){shw1("\n  рус.-" + q.rl1 + "\n" + "  тат.-" + q.rl2)}
    else if (l1.substring(0,5) == "Род.я"){shw1("\n  рус.-" + q.r1 + "\n" + "  тат.-" + q.r2)}
    else if (l1.substring(0,5) == "Турец"){shw1("\n  рус.-" + q.tur1 + "\n" +  "  тат.-" + q.tur2)}

    
    if      (l2 == "Биология")      {shw2(q.bio   )}
    else if (l2 == "География")     {shw2(q.geo   )}
    else if (l2 == "ИЗО")           {shw2(q.art   )}
    else if (l2 == "История")       {shw2(q.his   )}
    else if (l2 == "Литература")    {shw2(q.lit   )}
    else if (l2 == "Геометрия")     {shw2(q.geom  )}
    else if (l2 == "Алгебра")       {shw2(q.alge  )}
    else if (l2 == "Музыка")        {shw2(q.mus   )}
    else if (l2 == "Общество")      {shw2(q.obs   )}
    else if (l2 == "Русский язык")  {shw2(q.rus   )}
    else if (l2 == "Технология")    {shw2(q.tec   )}
    else if (l2 == "Физ.культура")  {shw2(q.pe    )}
    else if (l2 == "Физика")        {shw2(q.physic)}
    else if (l2 == "Информатика")   {shw2(q.info  )}
    else if (l2 == "КЧ")            {shw2("В приложении нет дз для этого урока.")}
    else if (l2 == "-")             {shw2("-")}
    else if (l2.substring(0,5) == "Англ."){shw2("\n  сред.-" + q.eng1 + "\n" +  "  сильн.-" + q.eng2)}
    else if (l2.substring(0,5) == "Род.л"){shw2("\n  рус.-" + q.rl1 + "\n" + "  тат.-" + q.rl2)}
    else if (l2.substring(0,5) == "Род.я"){shw2("\n  рус.-" + q.r1 + "\n" + "  тат.-" + q.r2)}
    else if (l2.substring(0,5) == "Турец"){shw2("\n  рус.-" + q.tur1 + "\n" +  "  тат.-" + q.tur2)}

    
    if      (l3 == "Биология")      {shw3(q.bio   )}
    else if (l3 == "География")     {shw3(q.geo   )}
    else if (l3 == "ИЗО")           {shw3(q.art   )}
    else if (l3 == "История")       {shw3(q.his   )}
    else if (l3 == "Литература")    {shw3(q.lit   )}
    else if (l3 == "Геометрия")     {shw3(q.geom  )}
    else if (l3 == "Алгебра")       {shw3(q.alge  )}
    else if (l3 == "Музыка")        {shw3(q.mus   )}
    else if (l3 == "Общество")      {shw3(q.obs   )}
    else if (l3 == "Русский язык")  {shw3(q.rus   )}
    else if (l3 == "Технология")    {shw3(q.tec   )}
    else if (l3 == "Физ.культура")  {shw3(q.pe    )}
    else if (l3 == "Физика")        {shw3(q.physic)}
    else if (l3 == "Информатика")   {shw3(q.info  )}
    else if (l3 == "КЧ")            {shw3("В приложении нет дз для этого урока.")}
    else if (l3 == "-")             {shw3("-")}
    else if (l3.substring(0,5) == "Англ."){shw3("\n  сред.-" + q.eng1 + "\n" +  "  сильн.-" + q.eng2)}
    else if (l3.substring(0,5) == "Род.л"){shw3("\n  рус.-" + q.rl1 + "\n" + "  тат.-" + q.rl2)}
    else if (l3.substring(0,5) == "Род.я"){shw3("\n  рус.-" + q.r1 + "\n" + "  тат.-" + q.r2)}
    else if (l3.substring(0,5) == "Турец"){shw3("\n  рус.-" + q.tur1 + "\n" +  "  тат.-" + q.tur2)}

    
    if      (l4 == "Биология")      {shw4(q.bio   )}
    else if (l4 == "География")     {shw4(q.geo   )}
    else if (l4 == "ИЗО")           {shw4(q.art   )}
    else if (l4 == "История")       {shw4(q.his   )}
    else if (l4 == "Литература")    {shw4(q.lit   )}
    else if (l4 == "Геометрия")     {shw4(q.geom  )}
    else if (l4 == "Алгебра")       {shw4(q.alge  )}
    else if (l4 == "Музыка")        {shw4(q.mus   )}
    else if (l4 == "Общество")      {shw4(q.obs   )}
    else if (l4 == "Русский язык")  {shw4(q.rus   )}
    else if (l4 == "Технология")    {shw4(q.tec   )}
    else if (l4 == "Физ.культура")  {shw4(q.pe    )}
    else if (l4 == "Физика")        {shw4(q.physic)}
    else if (l4 == "Информатика")   {shw4(q.info  )}
    else if (l4 == "КЧ")            {shw4("В приложении нет дз для этого урока.")}
    else if (l4 == "-")             {shw4("-")}
    else if (l4.substring(0,5) == "Англ."){shw4("\n  сред.-" + q.eng1 + "\n" +  "  сильн.-" + q.eng2)}
    else if (l4.substring(0,5) == "Род.л"){shw4("\n  рус.-" + q.rl1 + "\n" + "  тат.-" + q.rl2)}
    else if (l4.substring(0,5) == "Род.я"){shw4("\n  рус.-" + q.r1 + "\n" + "  тат.-" + q.r2)}
    else if (l4.substring(0,5) == "Турец"){shw4("\n  рус.-" + q.tur1 + "\n" +  "  тат.-" + q.tur2)}

    
    if      (l5 == "Биология")      {shw5(q.bio   )}
    else if (l5 == "География")     {shw5(q.geo   )}
    else if (l5 == "ИЗО")           {shw5(q.art   )}
    else if (l5 == "История")       {shw5(q.his   )}
    else if (l5 == "Литература")    {shw5(q.lit   )}
    else if (l5 == "Геометрия")     {shw5(q.geom  )}
    else if (l5 == "Алгебра")       {shw5(q.alge  )}
    else if (l5 == "Музыка")        {shw5(q.mus   )}
    else if (l5 == "Общество")      {shw5(q.obs   )}
    else if (l5 == "Русский язык")  {shw5(q.rus   )}
    else if (l5 == "Технология")    {shw5(q.tec   )}
    else if (l5 == "Физ.культура")  {shw5(q.pe    )}
    else if (l5 == "Физика")        {shw5(q.physic)}
    else if (l5 == "Информатика")   {shw5(q.info  )}
    else if (l5 == "КЧ")            {shw5("В приложении нет дз для этого урока.")}
    else if (l5 == "-")             {shw5("-")}
    else if (l5.substring(0,5) == "Англ."){shw5("\n  сред.-" + q.eng1 + "\n" +  "  сильн.-" + q.eng2)}
    else if (l5.substring(0,5) == "Род.л"){shw5("\n  рус.-" + q.rl1 + "\n" + "  тат.-" + q.rl2)}
    else if (l5.substring(0,5) == "Род.я"){shw5("\n  рус.-" + q.r1 + "\n" + "  тат.-" + q.r2)}
    else if (l5.substring(0,5) == "Турец"){shw5("\n  рус.-" + q.tur1 + "\n" +  "  тат.-" + q.tur2)}

    
    if      (l6 == "Биология")      {shw6(q.bio   )}
    else if (l6 == "География")     {shw6(q.geo   )}
    else if (l6 == "ИЗО")           {shw6(q.art   )}
    else if (l6 == "История")       {shw6(q.his   )}
    else if (l6 == "Литература")    {shw6(q.lit   )}
    else if (l6 == "Геометрия")     {shw6(q.geom  )}
    else if (l6 == "Алгебра")       {shw6(q.alge  )}
    else if (l6 == "Музыка")        {shw6(q.mus   )}
    else if (l6 == "Общество")      {shw6(q.obs   )}
    else if (l6 == "Русский язык")  {shw6(q.rus   )}
    else if (l6 == "Технология")    {shw6(q.tec   )}
    else if (l6 == "Физ.культура")  {shw6(q.pe    )}
    else if (l6 == "Физика")        {shw6(q.physic)}
    else if (l6 == "Информатика")   {shw6(q.info  )}
    else if (l6 == "КЧ")            {shw6("В приложении нет дз для этого урока.")}
    else if (l6 == "-")             {shw6("-")}
    else if (l6.substring(0,5) == "Англ."){shw6("\n  сред.-" + q.eng1 + "\n" +  "  сильн.-" + q.eng2)}
    else if (l6.substring(0,5) == "Род.л"){shw6("\n  рус.-" + q.rl1 + "\n" + "  тат.-" + q.rl2)}
    else if (l6.substring(0,5) == "Род.я"){shw6("\n  рус.-" + q.r1 + "\n" + "  тат.-" + q.r2)}
    else if (l6.substring(0,5) == "Турец"){shw6("\n  рус.-" + q.tur1 + "\n" +  "  тат.-" + q.tur2)}

    
    if      (l7 == "Биология")      {shw7(q.bio   )}
    else if (l7 == "География")     {shw7(q.geo   )}
    else if (l7 == "ИЗО")           {shw7(q.art   )}
    else if (l7 == "История")       {shw7(q.his   )}
    else if (l7 == "Литература")    {shw7(q.lit   )}
    else if (l7 == "Геометрия")     {shw7(q.geom  )}
    else if (l7 == "Алгебра")       {shw7(q.alge  )}
    else if (l7 == "Музыка")        {shw7(q.mus   )}
    else if (l7 == "Общество")      {shw7(q.obs   )}
    else if (l7 == "Русский язык")  {shw7(q.rus   )}
    else if (l7 == "Технология")    {shw7(q.tec   )}
    else if (l7 == "Физ.культура")  {shw7(q.pe    )}
    else if (l7 == "Физика")        {shw7(q.physic)}
    else if (l7 == "Информатика")   {shw7(q.info  )}
    else if (l7 == "КЧ")            {shw7("В приложении нет дз для этого урока.")}
    else if (l7 == "-")             {shw7("-")}
    else if (l7.substring(0,5) == "Англ."){shw7("\n  сред.-" + q.eng1 + "\n" +  "  сильн.-" + q.eng2)}
    else if (l7.substring(0,5) == "Род.л"){shw7("\n  рус.-" + q.rl1 + "\n" + "  тат.-" + q.rl2)}
    else if (l7.substring(0,5) == "Род.я"){shw7("\n  рус.-" + q.r1 + "\n" + "  тат.-" + q.r2)}
    else if (l7.substring(0,5) == "Турец"){shw7("\n  рус.-" + q.tur1 + "\n" +  "  тат.-" + q.tur2)}

    
    if      (l8 == "Биология")      {shw8(q.bio   )}
    else if (l8 == "География")     {shw8(q.geo   )}
    else if (l8 == "ИЗО")           {shw8(q.art   )}
    else if (l8 == "История")       {shw8(q.his   )}
    else if (l8 == "Литература")    {shw8(q.lit   )}
    else if (l8 == "Геометрия")     {shw8(q.geom  )}
    else if (l8 == "Алгебра")       {shw8(q.alge  )}
    else if (l8 == "Музыка")        {shw8(q.mus   )}
    else if (l8 == "Общество")      {shw8(q.obs   )}
    else if (l8 == "Русский язык")  {shw8(q.rus   )}
    else if (l8 == "Технология")    {shw8(q.tec   )}
    else if (l8 == "Физ.культура")  {shw8(q.pe    )}
    else if (l8 == "Физика")        {shw8(q.physic)}
    else if (l8 == "Информатика")   {shw8(q.info  )}
    else if (l8 == "КЧ")            {shw8("В приложении нет дз для этого урока.")}
    else if (l8 == "-")             {shw8("-")}
    else if (l8.substring(0,5) == "Англ."){shw8("\n  сред.-" + q.eng1 + "\n" +  "  сильн.-" + q.eng2)}
    else if (l8.substring(0,5) == "Род.л"){shw8("\n  рус.-" + q.rl1 + "\n" + "  тат.-" + q.rl2)}
    else if (l8.substring(0,5) == "Род.я"){shw8("\n  рус.-" + q.r1 + "\n" + "  тат.-" + q.r2)}
    else if (l8.substring(0,5) == "Турец"){shw8("\n  рус.-" + q.tur1 + "\n" +  "  тат.-" + q.tur2)}





    if      (l12 == "Биология")      {shw12(q.bio   )}
    else if (l12 == "География")     {shw12(q.geo   )}
    else if (l12 == "ИЗО")           {shw12(q.art   )}
    else if (l12 == "История")       {shw12(q.his   )}
    else if (l12 == "Литература")    {shw12(q.lit   )}
    else if (l12 == "Геометрия")     {shw12(q.geom  )}
    else if (l12 == "Алгебра")       {shw12(q.alge  )}
    else if (l12 == "Музыка")        {shw12(q.mus   )}
    else if (l12 == "Общество")      {shw12(q.obs   )}
    else if (l12 == "Русский язык")  {shw12(q.rus   )}
    else if (l12 == "Технология")    {shw12(q.tec   )}
    else if (l12 == "Физ.культура")  {shw12(q.pe    )}
    else if (l12 == "Физика")        {shw12(q.physic)}
    else if (l12 == "Информатика")   {shw12(q.info  )}
    else if (l12 == "КЧ")            {shw12("В приложении нет дз для этого урока.")}
    else if (l12 == "-")             {shw12("-")}
    else if (l12.substring(0,5) == "Англ."){shw12("\n  сред.-" + q.eng1 + "\n" +  "  сильн.-" + q.eng2)}
    else if (l12.substring(0,5) == "Род.л"){shw12("\n  рус.-" + q.rl1 + "\n" + "  тат.-" + q.rl2)}
    else if (l12.substring(0,5) == "Род.я"){shw12("\n  рус.-" + q.r1 + "\n" + "  тат.-" + q.r2)}
    else if (l12.substring(0,5) == "Турец"){shw12("\n  рус.-" + q.tur1 + "\n" +  "  тат.-" + q.tur2)}

    
    if      (l22 == "Биология")      {shw22(q.bio   )}
    else if (l22 == "География")     {shw22(q.geo   )}
    else if (l22 == "ИЗО")           {shw22(q.art   )}
    else if (l22 == "История")       {shw22(q.his   )}
    else if (l22 == "Литература")    {shw22(q.lit   )}
    else if (l22 == "Геометрия")     {shw22(q.geom  )}
    else if (l22 == "Алгебра")       {shw22(q.alge  )}
    else if (l22 == "Музыка")        {shw22(q.mus   )}
    else if (l22 == "Общество")      {shw22(q.obs   )}
    else if (l22 == "Русский язык")  {shw22(q.rus   )}
    else if (l22 == "Технология")    {shw22(q.tec   )}
    else if (l22 == "Физ.культура")  {shw22(q.pe    )}
    else if (l22 == "Физика")        {shw22(q.physic)}
    else if (l22 == "Информатика")   {shw22(q.info  )}
    else if (l22 == "КЧ")            {shw22("В приложении нет дз для этого урока.")}
    else if (l22 == "-")             {shw22("-")}
    else if (l22.substring(0,5) == "Англ."){shw22("\n  сред.-" + q.eng1 + "\n" +  "  сильн.-" + q.eng2)}
    else if (l22.substring(0,5) == "Род.л"){shw22("\n  рус.-" + q.rl1 + "\n" + "  тат.-" + q.rl2)}
    else if (l22.substring(0,5) == "Род.я"){shw22("\n  рус.-" + q.r1 + "\n" + "  тат.-" + q.r2)}
    else if (l22.substring(0,5) == "Турец"){shw22("\n  рус.-" + q.tur1 + "\n" +  "  тат.-" + q.tur2)}

    
    if      (l32 == "Биология")      {shw32(q.bio   )}
    else if (l32 == "География")     {shw32(q.geo   )}
    else if (l32 == "ИЗО")           {shw32(q.art   )}
    else if (l32 == "История")       {shw32(q.his   )}
    else if (l32 == "Литература")    {shw32(q.lit   )}
    else if (l32 == "Геометрия")     {shw32(q.geom  )}
    else if (l32 == "Алгебра")       {shw32(q.alge  )}
    else if (l32 == "Музыка")        {shw32(q.mus   )}
    else if (l32 == "Общество")      {shw32(q.obs   )}
    else if (l32 == "Русский язык")  {shw32(q.rus   )}
    else if (l32 == "Технология")    {shw32(q.tec   )}
    else if (l32 == "Физ.культура")  {shw32(q.pe    )}
    else if (l32 == "Физика")        {shw32(q.physic)}
    else if (l32 == "Информатика")   {shw32(q.info  )}
    else if (l32 == "КЧ")            {shw32("В приложении нет дз для этого урока.")}
    else if (l32 == "-")             {shw32("-")}
    else if (l32.substring(0,5) == "Англ."){shw32("\n  сред.-" + q.eng1 + "\n" +  "  сильн.-" + q.eng2)}
    else if (l32.substring(0,5) == "Род.л"){shw32("\n  рус.-" + q.rl1 + "\n" + "  тат.-" + q.rl2)}
    else if (l32.substring(0,5) == "Род.я"){shw32("\n  рус.-" + q.r1 + "\n" + "  тат.-" + q.r2)}
    else if (l32.substring(0,5) == "Турец"){shw32("\n  рус.-" + q.tur1 + "\n" +  "  тат.-" + q.tur2)}

    
    if      (l42 == "Биология")      {shw42(q.bio   )}
    else if (l42 == "География")     {shw42(q.geo   )}
    else if (l42 == "ИЗО")           {shw42(q.art   )}
    else if (l42 == "История")       {shw42(q.his   )}
    else if (l42 == "Литература")    {shw42(q.lit   )}
    else if (l42 == "Геометрия")     {shw42(q.geom  )}
    else if (l42 == "Алгебра")       {shw42(q.alge  )}
    else if (l42 == "Музыка")        {shw42(q.mus   )}
    else if (l42 == "Общество")      {shw42(q.obs   )}
    else if (l42 == "Русский язык")  {shw42(q.rus   )}
    else if (l42 == "Технология")    {shw42(q.tec   )}
    else if (l42 == "Физ.культура")  {shw42(q.pe    )}
    else if (l42 == "Физика")        {shw42(q.physic)}
    else if (l42 == "Информатика")   {shw42(q.info  )}
    else if (l42 == "КЧ")            {shw42("В приложении нет дз для этого урока.")}
    else if (l42 == "-")             {shw42("-")}
    else if (l42.substring(0,5) == "Англ."){shw42("\n  сред.-" + q.eng1 + "\n" +  "  сильн.-" + q.eng2)}
    else if (l42.substring(0,5) == "Род.л"){shw42("\n  рус.-" + q.rl1 + "\n" + "  тат.-" + q.rl2)}
    else if (l42.substring(0,5) == "Род.я"){shw42("\n  рус.-" + q.r1 + "\n" + "  тат.-" + q.r2)}
    else if (l42.substring(0,5) == "Турец"){shw42("\n  рус.-" + q.tur1 + "\n" +  "  тат.-" + q.tur2)}

    
    if      (l52 == "Биология")      {shw52(q.bio   )}
    else if (l52 == "География")     {shw52(q.geo   )}
    else if (l52 == "ИЗО")           {shw52(q.art   )}
    else if (l52 == "История")       {shw52(q.his   )}
    else if (l52 == "Литература")    {shw52(q.lit   )}
    else if (l52 == "Геометрия")     {shw52(q.geom  )}
    else if (l52 == "Алгебра")       {shw52(q.alge  )}
    else if (l52 == "Музыка")        {shw52(q.mus   )}
    else if (l52 == "Общество")      {shw52(q.obs   )}
    else if (l52 == "Русский язык")  {shw52(q.rus   )}
    else if (l52 == "Технология")    {shw52(q.tec   )}
    else if (l52 == "Физ.культура")  {shw52(q.pe    )}
    else if (l52 == "Физика")        {shw52(q.physic)}
    else if (l52 == "Информатика")   {shw52(q.info  )}
    else if (l52 == "КЧ")            {shw52("В приложении нет дз для этого урока.")}
    else if (l52 == "-")             {shw52("-")}
    else if (l52.substring(0,5) == "Англ."){shw52("\n  сред.-" + q.eng1 + "\n" +  "  сильн.-" + q.eng2)}
    else if (l52.substring(0,5) == "Род.л"){shw52("\n  рус.-" + q.rl1 + "\n" + "  тат.-" + q.rl2)}
    else if (l52.substring(0,5) == "Род.я"){shw52("\n  рус.-" + q.r1 + "\n" + "  тат.-" + q.r2)}
    else if (l52.substring(0,5) == "Турец"){shw52("\n  рус.-" + q.tur1 + "\n" +  "  тат.-" + q.tur2)}

    
    if      (l62 == "Биология")      {shw62(q.bio   )}
    else if (l62 == "География")     {shw62(q.geo   )}
    else if (l62 == "ИЗО")           {shw62(q.art   )}
    else if (l62 == "История")       {shw62(q.his   )}
    else if (l62 == "Литература")    {shw62(q.lit   )}
    else if (l62 == "Геометрия")     {shw62(q.geom  )}
    else if (l62 == "Алгебра")       {shw62(q.alge  )}
    else if (l62 == "Музыка")        {shw62(q.mus   )}
    else if (l62 == "Общество")      {shw62(q.obs   )}
    else if (l62 == "Русский язык")  {shw62(q.rus   )}
    else if (l62 == "Технология")    {shw62(q.tec   )}
    else if (l62 == "Физ.культура")  {shw62(q.pe    )}
    else if (l62 == "Физика")        {shw62(q.physic)}
    else if (l62 == "Информатика")   {shw62(q.info  )}
    else if (l62 == "КЧ")            {shw62("В приложении нет дз для этого урока.")}
    else if (l62 == "-")             {shw62("-")}
    else if (l62.substring(0,5) == "Англ."){shw62("\n  сред.-" + q.eng1 + "\n" +  "  сильн.-" + q.eng2)}
    else if (l62.substring(0,5) == "Род.л"){shw62("\n  рус.-" + q.rl1 + "\n" + "  тат.-" + q.rl2)}
    else if (l62.substring(0,5) == "Род.я"){shw62("\n  рус.-" + q.r1 + "\n" + "  тат.-" + q.r2)}
    else if (l62.substring(0,5) == "Турец"){shw62("\n  рус.-" + q.tur1 + "\n" +  "  тат.-" + q.tur2)}

    
    if      (l72 == "Биология")      {shw72(q.bio   )}
    else if (l72 == "География")     {shw72(q.geo   )}
    else if (l72 == "ИЗО")           {shw72(q.art   )}
    else if (l72 == "История")       {shw72(q.his   )}
    else if (l72 == "Литература")    {shw72(q.lit   )}
    else if (l72 == "Геометрия")     {shw72(q.geom  )}
    else if (l72 == "Алгебра")       {shw72(q.alge  )}
    else if (l72 == "Музыка")        {shw72(q.mus   )}
    else if (l72 == "Общество")      {shw72(q.obs   )}
    else if (l72 == "Русский язык")  {shw72(q.rus   )}
    else if (l72 == "Технология")    {shw72(q.tec   )}
    else if (l72 == "Физ.культура")  {shw72(q.pe    )}
    else if (l72 == "Физика")        {shw72(q.physic)}
    else if (l72 == "Информатика")   {shw72(q.info  )}
    else if (l72 == "КЧ")            {shw72("В приложении нет дз для этого урока.")}
    else if (l72 == "-")             {shw72("-")}
    else if (l72.substring(0,5) == "Англ."){shw72("\n  сред.-" + q.eng1 + "\n" +  "  сильн.-" + q.eng2)}
    else if (l72.substring(0,5) == "Род.л"){shw72("\n  рус.-" + q.rl1 + "\n" + "  тат.-" + q.rl2)}
    else if (l72.substring(0,5) == "Род.я"){shw72("\n  рус.-" + q.r1 + "\n" + "  тат.-" + q.r2)}
    else if (l72.substring(0,5) == "Турец"){shw72("\n  рус.-" + q.tur1 + "\n" +  "  тат.-" + q.tur2)}

    
    if      (l82 == "Биология")      {shw82(q.bio   )}
    else if (l82 == "География")     {shw82(q.geo   )}
    else if (l82 == "ИЗО")           {shw82(q.art   )}
    else if (l82 == "История")       {shw82(q.his   )}
    else if (l82 == "Литература")    {shw82(q.lit   )}
    else if (l82 == "Геометрия")     {shw82(q.geom  )}
    else if (l82 == "Алгебра")       {shw82(q.alge  )}
    else if (l82 == "Музыка")        {shw82(q.mus   )}
    else if (l82 == "Общество")      {shw82(q.obs   )}
    else if (l82 == "Русский язык")  {shw82(q.rus   )}
    else if (l82 == "Технология")    {shw82(q.tec   )}
    else if (l82 == "Физ.культура")  {shw82(q.pe    )}
    else if (l82 == "Физика")        {shw82(q.physic)}
    else if (l82 == "Информатика")   {shw82(q.info  )}
    else if (l82 == "КЧ")            {shw82("В приложении нет дз для этого урока.")}
    else if (l82 == "-")             {shw82("-")}
    else if (l82.substring(0,5) == "Англ."){shw82("\n  сред.-" + q.eng1 + "\n" +  "  сильн.-" + q.eng2)}
    else if (l82.substring(0,5) == "Род.л"){shw82("\n  рус.-" + q.rl1 + "\n" + "  тат.-" + q.rl2)}
    else if (l82.substring(0,5) == "Род.я"){shw82("\n  рус.-" + q.r1 + "\n" + "  тат.-" + q.r2)}
    else if (l82.substring(0,5) == "Турец"){shw82("\n  рус.-" + q.tur1 + "\n" +  "  тат.-" + q.tur2)}





    shw13(q.alge)
    shw23(q.bio)
    shw33(q.tur1)
    shw43(q.tur2)
    shw53(q.geo)
    shw63(q.geom)
    shw73(q.art)
    shw83(q.eng1)
    shw93(q.eng2)
    shw103(q.info)
    shw113(q.his)
    shw123(q.lit)
    shw133(q.mus)
    shw143(q.obs)
    shw153(q.rl1)
    shw163(q.rl2)
    shw173(q.r1)
    shw183(q.r2)
    shw193(q.rus)
    shw203(q.tec)
    shw213(q.physic)
    shw223(q.pe)
  })       
  


  return (
    <SafeAreaView style={styles.ground}>


    {/* <View style={styles.ground}> */}
      <LinearGradient
        // Background Linear Gradient
          colors={clrs}
        style={styles.background}
      >

      <ScrollView>
        <View style={styles.scroll}>
        <Text style={styles.t3b}>На сегодня</Text>

        <Text style={styles.sub}>{l1 + ': ' + hw1}</Text>
        <Text style={styles.sub}>{l2 + ': ' + hw2}</Text>
        <Text style={styles.sub}>{l3 + ': ' + hw3}</Text>
        <Text style={styles.sub}>{l4 + ': ' + hw4}</Text>
        <Text style={styles.sub}>{l5 + ': ' + hw5}</Text>
        <Text style={styles.sub}>{l6 + ': ' + hw6}</Text>
        <Text style={styles.sub}>{l7 + ': ' + hw7}</Text>
        <Text style={styles.sub}>{l8 + ': ' + hw8}</Text>


        <Text style={styles.t3b}>На завтра</Text>

        <Text style={styles.sub}>{l12 + ': ' + hw12}</Text>
        <Text style={styles.sub}>{l22 + ': ' + hw22}</Text>
        <Text style={styles.sub}>{l32 + ': ' + hw32}</Text>
        <Text style={styles.sub}>{l42 + ': ' + hw42}</Text>
        <Text style={styles.sub}>{l52 + ': ' + hw52}</Text>
        <Text style={styles.sub}>{l62 + ': ' + hw62}</Text>
        <Text style={styles.sub}>{l72 + ': ' + hw72}</Text>
        <Text style={styles.sub}>{l82 + ': ' + hw82}</Text>


        <Text style={styles.t3b}>Все дз</Text>

        <Text style={styles.sub}>{subs[0 ] + ': ' + hw13}</Text>
        <Text style={styles.sub}>{subs[1 ] + ': ' + hw23}</Text>
        <Text style={styles.sub}>{subs[2 ] + ': ' + hw33}</Text>
        <Text style={styles.sub}>{subs[3 ] + ': ' + hw43}</Text>
        <Text style={styles.sub}>{subs[4 ] + ': ' + hw53}</Text>
        <Text style={styles.sub}>{subs[5 ] + ': ' + hw63}</Text>
        <Text style={styles.sub}>{subs[6 ] + ': ' + hw73}</Text>
        <Text style={styles.sub}>{subs[7 ] + ': ' + hw83}</Text>
        <Text style={styles.sub}>{subs[8 ] + ': ' + hw93}</Text>
        <Text style={styles.sub}>{subs[9 ] + ': ' + hw103}</Text>
        <Text style={styles.sub}>{subs[10] + ': ' + hw113}</Text>
        <Text style={styles.sub}>{subs[11] + ': ' + hw123}</Text>
        <Text style={styles.sub}>{subs[12] + ': ' + hw133}</Text>
        <Text style={styles.sub}>{subs[13] + ': ' + hw143}</Text>
        <Text style={styles.sub}>{subs[14] + ': ' + hw153}</Text>
        <Text style={styles.sub}>{subs[15] + ': ' + hw163}</Text>
        <Text style={styles.sub}>{subs[16] + ': ' + hw173}</Text>
        <Text style={styles.sub}>{subs[17] + ': ' + hw183}</Text>
        <Text style={styles.sub}>{subs[18] + ': ' + hw193}</Text>
        <Text style={styles.sub}>{subs[19] + ': ' + hw203}</Text>
        <Text style={styles.sub}>{subs[20] + ': ' + hw213}</Text>
        <Text style={styles.sub}>{subs[21] + ': ' + hw223}</Text>

        </View>
      </ScrollView>

      {/* nav panel */}
      <View style={styles.navpan}>


        <View  style={styles.anavbut}>
          <Text onPress={tohome} style={styles.navbut2}>
            <Image
              style={styles.img}
              source={ref1}
            />
          </Text>
        </View>


        <View  style={styles.navbut1}>
          <Text style={styles.navbut2}>
            <Image
              style={styles.img}
              source={ref2}
            />
          </Text>
        </View>


        <View  style={styles.navbut1}>
          <Text onPress={touser} style={styles.navbut2}>
            <Image
              style={styles.img}
              source={ref3}
            />
          </Text>
        </View>


      </View>

      </LinearGradient>
    {/* </View> */}

    </SafeAreaView>
  );
}


const styles1 = StyleSheet.create({
  ground:{
    flex:1,
    backgroundColor:"#6B8B8F",
  },

  background:{
    height:"100%",
    width:"100%",
  },

  scroll:{
    alignItems:"center",
    wight:"100%"
  }  ,


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
      paddingBottom:5,
      marginTop:40
  },
  t31:{
    textAlign:"center",
    fontSize:19,
    color:"#fff",
    fontFamily:"medium",
    marginBottom:3
  },

  t1b:{
    textAlign:"center",
    fontSize:16,
    color:"#234952",
    fontFamily:"thin"
  },

  t2b:{
    textAlign:"center",
    fontSize:17,
    color:"#234952",
    fontFamily:"thin"
  },

  t3b:{
    textAlign:"center",
    fontSize:20,
    color:"#234952",
    fontFamily:"medium",
    marginBottom:10,
    marginTop:25
  },
  
  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#234952",
    fontFamily:"medium",
    marginBottom:3
  },

  sub:{
    backgroundColor:"#234952",
    fontSize:19,
    color:"#fff",
    fontFamily:"thin",
    padding:15,
    margin:2,
    width:"97%",
    borderRadius:20
  },

  navpan:{
    alignItems:"center",
    width:"100%",
    height:"8%",
    flexDirection:"row"
  },

  anavbut:{
    alignItems:"center",
    justifyContent:"center",
    //backgroundColor:"#D6D6D6",
    height:"100%",
    width:"34%",
  },

  navbut1:{
    //backgroundColor:"#ddd",
    height:"100%",
    width:"34%",
    alignItems:"center",
    justifyContent:"center",
  },

  navbut2:{
    height:"100%",
    width:"100%",
    textAlign:"center"
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

const styles2 = StyleSheet.create({
  ground:{
    flex:1,
    backgroundColor:"#800000",
  },

  background:{
    height:"100%",
    width:"100%",
  },

  scroll:{
    alignItems:"center",
    wight:"100%"
  }  ,


  t1:{
    fontSize:16,
    color:"#800000",
    fontFamily:"thin"
  },

  t2:{
    fontSize:19,
    color:"#800000",
    fontFamily:"thin"
  },

  t3:{
    fontSize:22,
    color:"#800000",
    fontFamily:"medium",
      paddingBottom:5,
      marginTop:40
  },
  t31:{
    textAlign:"center",
    fontSize:19,
    color:"#800000",
    fontFamily:"medium",
    marginBottom:3
  },

  t1b:{
    textAlign:"center",
    fontSize:16,
    color:"#fff",
    fontFamily:"thin"
  },

  t2b:{
    textAlign:"center",
    fontSize:17,
    color:"#fff",
    fontFamily:"thin"
  },

  t3b:{
    textAlign:"center",
    fontSize:20,
    color:"#fff",
    fontFamily:"medium",
    marginBottom:10,
    marginTop:25
  },
  
  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#fff",
    fontFamily:"medium",
    marginBottom:3
  },

  sub:{
    backgroundColor:"#fff",
    fontSize:19,
    color:"#800000",
    fontFamily:"thin",
    padding:15,
    margin:2,
    width:"97%",
    borderRadius:20
  },

  navpan:{
    alignItems:"center",
    width:"100%",
    height:"8%",
    flexDirection:"row"
  },

  anavbut:{
    alignItems:"center",
    justifyContent:"center",
    //backgroundColor:"#D6D6D6",
    height:"100%",
    width:"34%",
  },

  navbut1:{
    //backgroundColor:"#ddd",
    height:"100%",
    width:"34%",
    alignItems:"center",
    justifyContent:"center",
  },

  navbut2:{
    height:"100%",
    width:"100%",
    textAlign:"center"
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

const styles3 = StyleSheet.create({
  ground:{
    flex:1,
    backgroundColor:"#E7EDFF",
  },

  background:{
    height:"100%",
    width:"100%",
  },

  scroll:{
    alignItems:"center",
    wight:"100%"
  }  ,


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
      paddingBottom:5,
      marginTop:40
  },
  t31:{
    textAlign:"center",
    fontSize:19,
    color:"#fff",
    fontFamily:"medium",
    marginBottom:3
  },

  t1b:{
    textAlign:"center",
    fontSize:16,
    color:"#0D0091",
    fontFamily:"thin"
  },

  t2b:{
    textAlign:"center",
    fontSize:17,
    color:"#0D0091",
    fontFamily:"thin"
  },

  t3b:{
    textAlign:"center",
    fontSize:20,
    color:"#0D0091",
    fontFamily:"medium",
    marginBottom:10,
    marginTop:25
  },
  
  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#0D0091",
    fontFamily:"medium",
    marginBottom:3
  },

  sub:{
    backgroundColor:"#6D5EFF",
    fontSize:19,
    color:"#fff",
    fontFamily:"thin",
    padding:15,
    margin:2,
    width:"97%",
    borderRadius:20
  },

  navpan:{
    alignItems:"center",
    width:"100%",
    height:"8%",
    flexDirection:"row"
  },

  anavbut:{
    alignItems:"center",
    justifyContent:"center",
    //backgroundColor:"#D6D6D6",
    height:"100%",
    width:"34%",
  },

  navbut1:{
    //backgroundColor:"#ddd",
    height:"100%",
    width:"34%",
    alignItems:"center",
    justifyContent:"center",
  },

  navbut2:{
    height:"100%",
    width:"100%",
    textAlign:"center"
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

const styles4 = StyleSheet.create({
  ground:{
    flex:1,
    backgroundColor:"black",
  },

  background:{
    height:"100%",
    width:"100%",
  },

  scroll:{
    alignItems:"center",
    wight:"100%"
  }  ,


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
      paddingBottom:5,
      marginTop:40
  },
  t31:{
    textAlign:"center",
    fontSize:19,
    color:"#fff",
    fontFamily:"medium",
    marginBottom:3
  },

  t1b:{
    textAlign:"center",
    fontSize:16,
    color:"#0D0091",
    fontFamily:"thin"
  },

  t2b:{
    textAlign:"center",
    fontSize:17,
    color:"#0D0091",
    fontFamily:"thin"
  },

  t3b:{
    textAlign:"center",
    fontSize:20,
    color:"#fff",
    fontFamily:"medium",
    marginBottom:10,
    marginTop:25
  },
  
  t31b:{
    textAlign:"center",
    fontSize:19,
    color:"#0D0091",
    fontFamily:"medium",
    marginBottom:3
  },

  sub:{
    backgroundColor:"#0D0091",
    fontSize:19,
    color:"#fff",
    fontFamily:"thin",
    padding:15,
    margin:2,
    width:"97%",
    borderRadius:20
  },

  navpan:{
    alignItems:"center",
    width:"100%",
    height:"8%",
    flexDirection:"row"
  },

  anavbut:{
    alignItems:"center",
    justifyContent:"center",
    //backgroundColor:"#D6D6D6",
    height:"100%",
    width:"34%",
  },

  navbut1:{
    //backgroundColor:"#ddd",
    height:"100%",
    width:"34%",
    alignItems:"center",
    justifyContent:"center",
  },

  navbut2:{
    height:"100%",
    width:"100%",
    textAlign:"center"
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