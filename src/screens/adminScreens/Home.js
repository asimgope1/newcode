import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { MyStatusBar } from '../../constants/config';
import { ORANGE } from '../../constants/color';
import { BACKGROUND, LOGO } from '../../constants/imagepath';
export default Home = () => {
    return (
        <View style={{ flex: 1,
        
        }}>
          
            <ImageBackground
                style={{
                    flex: 1,
                    // justifyContent: 'center',
                    alignItems: 'center'

                }}
                source={BACKGROUND}
            
            >
                 <Image
                resizeMode="contain"
                    style={{
                     
                    
                        height: '60%',
                        width: '60%'
                    }}
                    source={LOGO}
                />
                <View
                style={{
                    height:'50%',
                    width:'90%',
                //   
                    // backgroundColor:ORANGE
                }}
                >

                </View>


            </ImageBackground>


        </View>
    )
}
