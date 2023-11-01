import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
// import {createStackNavigator} from '@react-navigation/stack';
import { Splash } from "../screens/loginScreens/Splash";
import Home from "../screens/adminScreens/Home";
const Stack = createNativeStackNavigator();
export default LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      {/* <Stack.Screen options={{headerShown:false}} name="Registration" component={Registration}/>
        <Stack.Screen options={{headerShown:false}} name="HomeStack" component={HomeStack}/> */}
    </Stack.Navigator>
  )
}