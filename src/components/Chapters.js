import { View, Text,Pressable } from 'react-native'
import React from 'react'
import { GREY } from '../constants/color'

const Chapters = ({
    question='',
    chapter=''
}) => {
  return (
  
    <Pressable
    style={{
      borderWidth: 1,
      borderColor: GREY,
      borderRadius: 8,
      width: '90%',
      alignSelf: 'center',
      height: '8%',
      flexDirection: 'column',
      marginBottom:10,
    //   elevation:1,
        // backgroundColor:'white'
    }}>
    <View
      style={{
        marginTop:2,
        width: '90%',
        marginLeft:'5%',
        alignItems:'center',
        justifyContent:'flex-start',
        height: '50%',
        flexDirection: 'row',
      }}>
      <Text
      style={{
        fontSize: 15,
        textAlign: 'center',
        color: GREY,
      }}
      >{question}</Text>
    </View>
    <View
      style={{
        width: '90%',
        marginLeft:'5%',
        alignItems:'center',
        justifyContent:'flex-start',
        height: '25%',
        flexDirection: 'row',
      }}>
      <Text
      style={{
        fontSize: 11,
        textAlign: 'center',
        color: GREY,
      }}
      >{chapter}</Text>
    </View>
  </Pressable>
  )
}

export default Chapters