import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
// import {createStackNavigator} from '@react-navigation/stack';
import { Splash } from "../screens/loginScreens/Splash";
import Login from "../screens/loginScreens/Login";
import Dashboard from "../screens/adminScreens/Dashboard";

const Stack = createNativeStackNavigator();
export default LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
      {/* <Stack.Screen options={{headerShown:false}} name="Registration" component={Registration}/>
        <Stack.Screen options={{headerShown:false}} name="HomeStack" component={HomeStack}/> */}
    </Stack.Navigator>
  )
}