import { View, Text ,Image,Pressable} from 'react-native'
import React from 'react'
import { BELLICON, MENUE } from '../constants/imagepath'
import { HEADERCOLOR } from '../constants/color'

const Header = ({navigation, onPress=''}) => {
   
  return (
    <View
    style={{
        height:'6%',
        width:'100%',
        backgroundColor:HEADERCOLOR,
        flexDirection:'row',
        justifyContent:'space-evenly'
    }}
    >
      <Pressable
      style={{
        marginRight:'55%',
          height:'75%',
          width:'50%',
          justifyContent:'center',
          // alignItems:'flex-start',
          // flexDirection:'row'


      }}
      onPress={onPress}
      >
      <Image
      resizeMode="contain"
      style={{
    alignSelf:'flex-start',
        tintColor:'white',
          height:'55%',
          width:'100%'
      }}
      source={MENUE}
      
      />
      </Pressable>
      <Pressable
      style={{
          height:'80%',
          width:'50%',
          justifyContent:'center',
      }}
      >
      <Image
      resizeMode="center"
      style={{
        tintColor:'white',
          height:'60%',
          width:'100%'
      }}
      source={BELLICON}
      
      />
      </Pressable>

    </View>
  )
}
 

export default Header