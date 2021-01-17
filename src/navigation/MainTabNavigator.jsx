import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
//screens
//import JavaScriptでは「export default」と「export」の2つでimportの仕方が異なります。

//import {HomeScreen} from "../screens/HomeScreen"; // exportの場合はこちら
//import ColumScreen from "../screens/ColumScreen"; // export defaultの場合はこちら

import {HomeScreen} from "../screens/HomeScreen";
import ColumScreen from "../screens/ColumScreen";
import Diagnosis from "../screens/Diagnosis";

const Tab = createBottomTabNavigator();

export function MainTabNavigator(){
    return (
     <Tab.Navigator
      tabBarOptions={{
          activeTintColor:"#900",
          inactiveTintColor:"#999",
      }}
     >
         <Tab.Screen name= "Home" component = { HomeScreen }
          options={{
          tabBarLabel: 'ホーム',
          tabBarIcon: ({ color, size }) => (
         <Feather name="home" color={color} size={size} />
          ),
        }}/>
         
        
         <Tab.Screen name= "Colum" component = { ColumScreen } 
          options={{
          tabBarLabel: '医療コラム',
          tabBarIcon: ({ color, size }) => (
         <Entypo name="book" color={color} size={size} />
          ),
        }}/>
         
         <Tab.Screen name= "Diagnosis" component = { Diagnosis }
          options={{
          tabBarLabel: '診断名',
          tabBarIcon: ({ color, size }) => (
         <MaterialCommunityIcons name="file-edit-outline" color={color} size={size} />
          ),
        }}/>
     </Tab.Navigator>
    );
}

