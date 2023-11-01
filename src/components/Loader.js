import React from "react";
import { Image, Modal, Pressable, } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const Loader = ({
    visible = false,
    onBackPress,
    imageStyle,
    source,
    backgroundColor = `rgba(100, 100, 100, 0.5)`,
}) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType='slide'
            statusBarTranslucent
            onRequestClose={() => onBackPress != undefined && onBackPress(false)}
        >
            <Pressable
                style={{
                    flex: 1,
                    backgroundColor: backgroundColor,

                }}>
                <LinearGradient
                    colors={['#3056ff', '#ffffff', '#ffffff']}
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        style={imageStyle}
                        source={source}
                    />
                </LinearGradient>
            </Pressable>
        </Modal>
    )
}