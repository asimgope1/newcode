import { View, Text ,Image,FlatList} from 'react-native'
import React from 'react'
import { MyStatusBar } from '../../../constants/config';
import Header from '../../../components/Header';
import { HEADERCOLOR } from '../../../constants/color';
import { BACKARROW } from '../../../constants/imagepath';
import BackHeader from '../../../components/BackHeader';

const ChapterInfo = ({navigation}) => {
  const data=[
    {
      chapter:'Chapter 1',
      time:'10:00'
    },
    {
      chapter:'Chapter 2',
      time:'10:00'
    },
    {
      chapter:'Chapter 3',
      time:'10:00'
    },
    {
      chapter:'Chapter 4',
      time:'10:00'
    },
    {
      chapter:'Chapter 5',
      time:'10:00'
    },
    {
      chapter:'Chapter 6',
      time:'10:00'
    },
    {
      chapter:'Chapter 7',
      time:'10:00'
    },
    {
      chapter:'Chapter 8',
      time:'10:00'
    },
    {
      chapter:'Chapter 9',
      time:'10:00'
    },
    {
      chapter:'Chapter 10',
      time:'10:00'
    },
    {
      chapter:'Chapter 11',
      time:'10:00'
    },
    {
      chapter:'Chapter 12',
      time:'10:00'
    },
    {
      chapter:'Chapter 13',
      time:'10:00'
    },
    {
      chapter:'Chapter 14',
      time:'10:00'
    },
    {
      chapter:'Chapter 15',
      time:'10:00'
    },
    {
      chapter:'Chapter 16',
      time:'10:00'
    },
    {
      chapter:'Chapter 17',
      time:'10:00'
    },
    {
      chapter:'Chapter 18',
      time:'10:00'
    },
    {
      chapter:'Chapter 19',
      time:'10:00'
    },
    {
      chapter:'Chapter 20',
      time:'10:00'
    },
    {
      chapter:'Chapter 21',
      time:'10:00'
    },
    {
      chapter:'Chapter 22',
      time:'10:00'
    },
    {
      chapter:'Chapter 23',
      time:'10:00'
    },
    {
      chapter:'Chapter 24',
      time:'10:00'
    },
    {
      chapter:'Chapter 25',
      time:'10:00'
    },
    {
      chapter:'Chapter 26',
      time:'10:00'
    },
    {
      chapter:'Chapter 27',
      time:'10:00'
    },
    {
      chapter:'Chapter 28',
      time:'10:00'
    }

  ]
  return (
    <View
    style={{
      flex:1
    }}
    >
         <MyStatusBar backgroundColor={HEADERCOLOR} barStyle={'light-content'} />
      <BackHeader
      Header='Subject'
      />
      <View>
        <Text
        style={{
          fontSize:18,
          fontWeight:'bold',
          margin:'5%'
        }}
        >
          Chapter No
        </Text>
        <FlatList
        data={data}
        renderItem={({item})=>{
          return(
            <View
            style={{
              width:'90%',
              height:'35%',
              alignSelf:'center',
              flexDirection:'row',
              // backgroundColor:'red',
              justifyContent:'space-between',
              alignItems:'center',
              margin:'2%'
            }}
            >
              <Text
              style={{
                fontSize:16,
                fontWeight:'bold'
              }}
              >
                {item.chapter}
              </Text>
              <Text
              style={{
                fontSize:16,
                fontWeight:'bold'
              }}
              >
                {item.time}
              </Text>
            </View>
          )
        }}
        />
       
      </View>
    </View>
  )
}

export default ChapterInfo