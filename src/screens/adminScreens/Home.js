import {View, Text,Image} from 'react-native';
import React from 'react';
import { MyStatusBar } from '../../constants/config';
import { HEADERCOLOR, ORANGE } from '../../constants/color';
import { BELLICON, MENUE } from '../../constants/imagepath';
import Header from '../../components/Header';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1,}}>
      <MyStatusBar backgroundColor={HEADERCOLOR} barStyle={'light-content'} />
      <Header
      onPress={()=>{
        navigation.openDrawer()
        console.log("object")

      }}
      />
     
    </View>
  );
};

export default Home;
