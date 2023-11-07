import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { MyStatusBar } from '../../constants/config'
import { HEADERCOLOR } from '../../constants/color'

const Activities = ({navigation}) => {
  return (
    <View style={{flex: 1,}}>
    <MyStatusBar backgroundColor={HEADERCOLOR} barStyle={'light-content'} />
   <Header
   onPress={()=>{
        navigation.openDrawer()
   }}
   
   />
   </View>
  )
}

export default Activities