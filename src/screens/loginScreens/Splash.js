import React, { useEffect } from "react";
import { Image, ImageBackground, StatusBar, View } from "react-native";
import { HEIGHT, MyStatusBar, WIDTH } from "../../constants/config";
import { BLUE, SKIN, THEME } from "../../constants/color";
import { BACKGROUND, LOGO } from "../../constants/imagepath";

export const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 2000)
    }, [])

    return (
        <ImageBackground
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            source={BACKGROUND}
        >
            <MyStatusBar backgroundColor={'transparent'} barStyle={'light-content'} />

            <Image
                resizeMode="contain"
                style={{
                    height: '60%',
                    width: '60%'
                }}
                source={LOGO}
            />
        </ImageBackground>
    );
}
