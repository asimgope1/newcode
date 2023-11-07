import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { BLACK, ORANGE, WHITE } from "../constants/color";
import { WIDTH } from "../constants/config";
import {  ROBOTO_BOLD, } from "../constants/fontpath";

export const CustomBtn = ({
    text = "",
    onTouch,
    width = WIDTH * 0.9,
    backgroundColor = ORANGE,
    height = '',
    borderColor = WHITE
}) => {
    return (
        <Pressable style={{
            ...styles.button,
            width: width,
            backgroundColor: backgroundColor,
            height: height,
            borderWidth: 1,
            borderColor: borderColor,
            elevation:5,
        }}
            onPress={onTouch}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 16,
        // fontWeight: '600',
        color: BLACK,
        fontFamily:ROBOTO_BOLD
    },
})