import { View, Text, Image } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/adminScreens/Home';
import Profile from '../screens/adminScreens/Profile';
import { ERROR } from '../constants/imagepath';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{headerShown:false, tabBarIcon:() => {
            return <Image style={{width:20, height:20}} resizeMode='center' source={ERROR}/>
        }}}/>
        <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
    </Tab.Navigator>
  )
}

export default BottomNavigator