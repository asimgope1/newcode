import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {MyStatusBar} from '../../constants/config';
import {GREY, HEADERCOLOR} from '../../constants/color';
import AddBtn from '../../components/AddBtn';
import Chapters from '../../components/Chapters';

const Activities = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <MyStatusBar backgroundColor={HEADERCOLOR} barStyle={'light-content'} />
      <Header
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          height: '8%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
            color: 'black',
          }}>
          Subject
        </Text>
        <AddBtn onPress="" />
      </View>

      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          height: '8%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
            color: 'black',
          }}>
          CHOOSE CHAPTER
        </Text>
        <AddBtn onPress="" />
      </View>
      <Chapters
        question="Reflection"
        chapter="Chapter 1 "
      
      />
      <Chapters
        question="Reflection"
        chapter="Chapter 1 "
      
      />
      <Chapters
        question="Reflection"
        chapter="Chapter 1 "
      
      />
      <Chapters
        question="Reflection"
        chapter="Chapter 1 "
      
      />

    </View>
  );
};

export default Activities;
