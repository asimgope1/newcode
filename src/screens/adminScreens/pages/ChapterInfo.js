import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { MyStatusBar } from '../../../constants/config';
import BackHeader from '../../../components/BackHeader';
import { HEADERCOLOR } from '../../../constants/color';

const ChapterInfo = ({ navigation }) => {
  const data = [
    {
      chapter: 'Chapter 1',
      time: '10:00',
    },
    {
      chapter: 'Chapter 2',
      time: '10:00',
    },
    {
      chapter: 'Chapter 3',
      time: '10:00',
    },
    {
      chapter: 'Chapter 4',
      time: '10:00',
    },
    {
      chapter: 'Chapter 5',
      time: '10:00',
    },
    {
      chapter: 'Chapter 6',
      time: '10:00',
    },
  ];

  const chapterView = ({ item }) => {
    return (
      <View
        style={{
          marginTop: 20,
          width: '95%',
          height: 200, // Set a specific height for each item
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
          // alignItems: 'center',
          borderRadius: 6,
        }}>
          <View
          style={{
            width:'100%',
            height:'35%',
            // backgroundColor:'red'
          }}
          >

          </View>
      
      
   
      </View>
    );
  };

  const listfooter=()=>{
    return(
      <View
      style={{
        width:'100%',
        height:20
      }}
      >

      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar backgroundColor={HEADERCOLOR} barStyle={'light-content'} />
      <BackHeader Header="Subject"
      onPress={
        ()=>{
          navigation.goBack()
        }
      }
      />
      <View style={{ flex: 1, }}>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 20,
              marginLeft: 18,
              color: 'black',
            }}>
            CHAPTER No.
          </Text>
        </View>
        <FlatList data={data} renderItem={chapterView} keyExtractor={(item) => item.chapter} ListFooterComponent={listfooter} />
        
      </View>
    </View>
  );
};

export default ChapterInfo;
