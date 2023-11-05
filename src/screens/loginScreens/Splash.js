import React, { useEffect } from "react";
import { Image, ImageBackground, StatusBar, View } from "react-native";
import { HEIGHT, MyStatusBar, WIDTH } from "../../constants/config";
import { BLUE, SKIN, THEME } from "../../constants/color";
// import LinearGradient from "react-native-linear-gradient";
import { BACKGROUND, LOGO } from "../../constants/imagepath";

export const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 2000)
    }, [])

    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <MyStatusBar backgroundColor={'transparent'} barStyle={'light-content'} />
            <ImageBackground
            style={{
                height:HEIGHT,
                width:WIDTH,
                justifyContent:'center',
                alignItems:'center'
            }}
            source={BACKGROUND}
            
            >
                <Image
                resizeMode="contain"
                    style={{
                        // borderRadius: 100,

                        height: '60%',
                        width: '60%'
                    }}
                    source={LOGO}
                /> 
            </ImageBackground>


            
            {/* <View style={{
                elevation: 15
            }}>
                <Image
                    style={{
                        borderRadius: 100,
                        height: 200,
                        width: 200
                    }}
                    source={LOGO}
                />
            </View> */}
        </View>
    );
}
