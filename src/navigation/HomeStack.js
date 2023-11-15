import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerStack from './DrawerStack';
import ChapterInfo from '../screens/adminScreens/pages/ChapterInfo';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Set headerShown to false to hide the header
      }}>
      <Stack.Screen name="Home" component={DrawerStack} />
      <Stack.Screen name="chapters" component={ChapterInfo} />
      {/* <Stack.Screen name="Home" component={DrawerStack} /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
