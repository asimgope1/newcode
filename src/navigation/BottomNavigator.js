import { View, Text, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/adminScreens/Home';
import {
  ACTIVITIES,
  ERROR,
  HOME,
  ORDERS,
  PACKAGES,
} from '../constants/imagepath';
import { GREY, HEADERCOLOR, ORANGE } from '../constants/color';
import Activities from '../screens/adminScreens/Activities';
import Orders from '../screens/adminScreens/Orders';
import Packages from '../screens/adminScreens/Packages';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: '#fff',
          elevation: 2,
        },
        tabBarActiveTintColor: HEADERCOLOR, // Active tab icon color
        tabBarInactiveTintColor: GREY, // Inactive tab icon color
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const iconColor = focused ? HEADERCOLOR : GREY; // Change icon color when focused
            return (
              <Image
                style={{ width: 20, height: 20, tintColor: iconColor }}
                resizeMode="center"
                source={HOME}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Activities"
        component={Activities}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const iconColor = focused ? HEADERCOLOR : GREY; // Change icon color when focused
            return (
              <Image
                style={{ width: 20, height: 20, tintColor: iconColor }}
                resizeMode="center"
                source={ACTIVITIES}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const iconColor = focused ? HEADERCOLOR : GREY; // Change icon color when focused
            return (
              <Image
                style={{ width: 20, height: 20, tintColor: iconColor }}
                resizeMode="center"
                source={ORDERS}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Packages"
        component={Packages}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const iconColor = focused ? HEADERCOLOR : GREY; // Change icon color when focused
            return (
              <Image
                style={{ width: 20, height: 20, tintColor: iconColor }}
                resizeMode="center"
                source={PACKAGES}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
