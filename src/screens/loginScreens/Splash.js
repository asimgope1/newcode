import React, { useEffect } from "react";
import { Image, StatusBar, View } from "react-native";
import { HEIGHT, MyStatusBar, WIDTH } from "../../constants/config";
import { BLUE } from "../../constants/color";
// import LinearGradient from "react-native-linear-gradient";
import { LOGO } from "../../constants/imagepath";

export const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 2000)
    }, [])

    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <MyStatusBar backgroundColor={BLUE} barStyle={'light-content'} />
            <View style={{
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
            </View>
        </View>
    );
}
