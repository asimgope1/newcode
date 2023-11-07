import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Dashboard from '../screens/adminScreens/Dashboard';

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator initialRouteName='Dashboard'>
      <Drawer.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
    </Drawer.Navigator>
  );
}
