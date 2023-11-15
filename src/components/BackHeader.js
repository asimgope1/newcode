import { View, Text ,Image,Pressable} from 'react-native'
import React from 'react'
import { BACKARROW } from '../constants/imagepath'
import { HEADERCOLOR } from '../constants/color'

const BackHeader = ({
    Header='',
    onPress=''
}) => {
  return (
    <View
    style={{
     height:'5%',
     width:'100%',
     backgroundColor:HEADERCOLOR,
     flexDirection:'row'


    }}
    >
     <View
     style={{
       width:'20%',
       height:'100%',
       justifyContent:'center',
       alignItems:'center'
   

     }}
     >
        <Pressable
        onPress={onPress}
        >
     <Image
     source={BACKARROW}
     resizeMode='center'
     />
     </Pressable>
     </View>
     <Text
     style={{
       width:'80%',
       height:'100%',
       fontSize:18,
       fontWeight:'bold',
       color:'white',
       textAlignVertical:'center'
     }}
     >
       {Header}
     </Text>
   

    </View>
  )
}

export default BackHeader