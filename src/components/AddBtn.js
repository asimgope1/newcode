import { View, Text ,Pressable} from 'react-native'
import React from 'react'
import { HEADERCOLOR, ORANGE } from '../constants/color'

const AddBtn = ({
    onPress='',
    title='Add'
}) => {
  return (
    <Pressable
    onPress={onPress}
    style={{
     width: '20%',
     height: '45%',
     borderRadius: 6,
     borderWidth:1,
     borderColor:ORANGE,
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: '5%',
    
    }}
    >
     <Text
     style={{
       fontSize: 13,
       textAlign: 'center',
       color: ORANGE
     }}
     >
      {title}
     </Text>
 
    </Pressable>
  )
}

export default AddBtn