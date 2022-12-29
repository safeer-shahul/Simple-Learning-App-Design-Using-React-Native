import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView,
         Text,
         TouchableHighlight,
         View,
         StyleSheet
} from "react-native";

import Register from "./src/Register"
import Otp from "./src/Otp"
import Studentdetails from "./src/Studentdetails"
import Schoolboard from "./src/Schoolboard"
import Apptour from "./src/Apptour"
import Home from "./src/Home"
import Course from "./src/Course"
import Chapter from "./src/Chapter"
import Video from "./src/Video"
import Drawercont from "./src/Drawer/Drawercont"
import Contact from './src/BottomTab/Contact'
import Recent from './src/BottomTab/Recent'
import Profile from './src/BottomTab/Profile'
import Exams from './src/BottomTab/Exams'
import Qnbank from './src/TopTab/Qnbank'
import Resources from './src/TopTab/Resources'
import Chaptertest from './src/TopTab/Chaptertest'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const BottomTab = createMaterialBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown:false}}
      />
    <Stack.Screen
      name="Otp"
      component={Otp}
      options={{headerShown:false}}
    />
    <Stack.Screen
      name="Studentdetails"
      component={Studentdetails}
      options={{headerShown:false}}
    />
    <Stack.Screen
      name="Schoolboard"
      component={Schoolboard}
      options={{headerShown:false}}
    />
    <Stack.Screen
      name="Apptour"
      component={Apptour}
      options={{headerShown:false}}
    />
    <Stack.Screen
      name='MyDrawer'
      component={MyDrawer}
      options={{headerShown:false}}
    />
    <Stack.Screen
      name="Course"
      component={Course}
      options={{headerShown:false}}
    />
    <Stack.Screen
      name="MyTopTab"
      component={MyTopTab}
      options={{headerShown:false}}
    />
    <Stack.Screen
      name="Chapter"
      component={Chapter}
      options={{headerShown:false}}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{headerShown:false}}
    />
    <Stack.Screen
     name='Video'
     component={Video}
     options={{headerShown:false}}
    />
    </Stack.Navigator>
  )
}

function MyDrawer(){
  return(
    <Drawer.Navigator
      drawerContent={(props)=> <Drawercont {...props}/> }
    >
      <Drawer.Screen
        name='MyBottomTab'
        component={MyBottomTab}
        options={{headerShown:false}}
      />
    </Drawer.Navigator>
  )
}

function MyBottomTab(){
  return(
    
    <BottomTab.Navigator
      activeColor="#00c458"
        barStyle={{ 
          backgroundColor:'white',
          elevation:0,
          position:'absolute',
          left:20,
          right:20,
          bottom:25,
          height:65,
          borderRadius:4,
          justifyContent:'center'
        }}
      >
      <BottomTab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            focused ? <Icon name="home" color={'#00c458'} size={26}/> : <Icon name="home" color={'#c2c2c2'} size={26}/>
          ),
        }}
      />
      <BottomTab.Screen
        name='Recent'
        component={Recent}
        options={{
          tabBarLabel: 'Recent',
          tabBarIcon: ({ focused }) => (
            focused ? <Icon name="play-arrow" color={'#00c458'} size={26}/> : <Icon name="play-arrow" color={'#c2c2c2'} size={26}/>
          ),
        }}
      />
      <BottomTab.Screen
        name='Exams'
        component={Exams}
        options={{
          tabBarLabel: 'Exams',
          tabBarIcon: ({ focused }) => (
            focused ? <Icon name="article" color={'#00c458'} size={26}/> : <Icon name="article" color={'#c2c2c2'} size={26}/>
          ),
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
            focused ? <Icon name="person" color={'#00c458'} size={26}/> : <Icon name="person" color={'#c2c2c2'} size={26}/>
          ),
        }}
      />
      <BottomTab.Screen
        name='Contact'
        component={Contact}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ focused }) => (
            focused ? <Icon name="email" color={'#00c458'} size={26}/> : <Icon name="email" color={'#c2c2c2'} size={26}/>
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

function MyTopTab({navigation}){
  return(
    <SafeAreaView style={{width:wp('100%'),height:hp('100%'), backgroundColor:'#00202f'}}>
    <View style={{width:wp('100%'),height:hp('30%')}}>
      <View style={{width:wp('90%'),height:hp('7%'), marginLeft:20, marginTop:20,flexDirection:'row',alignItems:'center'}}>
        <View style={styles.menuClose}>
              <TouchableHighlight style={styles.closeBtn}
                  onPress={()=> navigation.push('Course')}
                  underlayColor='white'>
                  <Icon name='chevron-left' color={'#00c458'} size={18}/>
              </TouchableHighlight>
        </View>
        <View style={{justifyContent:'center',alignItems:'center', width:wp('75%')}}>
          <Text style={{color:'white', fontFamily:'Gilroy-Regular',fontSize:20}}>Biology</Text></View>
        </View>
      <View style={{width:wp('90%'), justifyContent:'center',height:hp('23%'),marginLeft:20}}>
        <Text style={{fontSize:25,fontFamily:'Gilroy-Bold',color:'white'}}>Long chapter name can be shown here.</Text>
        <View style={{flexDirection:'row', marginTop:10}}>
          <Icon name='radio-button-checked' color='#00c458' size={12}/>
          <Text style={styles.infoCourseTxt}>12 Chapters</Text>
          <Icon name='radio-button-checked' color='#00c458' size={12}/>
          <Text style={styles.infoCourseTxt}>4 Parts</Text>
        </View>
      </View>
    </View>
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle:{fontSize:12, fontFamily:'Gilroy-Regular'},
        tabBarStyle:{backgroundColor:'#00202f'},
        tabBarIndicatorStyle:{backgroundColor:'#00c458', width:wp('25%'),justifyContent:'center'}
      }}
    >
      <TopTab.Screen
        name='Videos'
        component={Chapter}
        options={{
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:'#83a1af',
        }}
      />
      <TopTab.Screen
        name='Chapter Test'
        component={Chaptertest}
        options={{
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:'#83a1af',
        }}
      />
      <TopTab.Screen
        name='Resources'
        component={Resources}
        options={{
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:'#83a1af',
        }}
      />
      <TopTab.Screen
        name='Qnbank'
        component={Qnbank}
        options={{
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:'#83a1af',
        }}
      />
    </TopTab.Navigator>
    </SafeAreaView>
  )
}

export default function App(){
  return(
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>
)
}

const styles = StyleSheet.create({
  menuClose:{
    width:wp('10%'),
    height:wp('10%'),
  },
  closeBtn:{
    borderColor:'#fff',
    borderWidth:1,
    borderRadius:4,
    justifyContent:'center',
    alignItems:'center',
    width:wp('10%'),
    height:wp('10%'),
},
infoCourseTxt:{
   color:'#00c458',
   fontFamily:"Gilroy-Medium",
   fontSize:10,
   marginLeft:5,
   marginRight:12
},
})