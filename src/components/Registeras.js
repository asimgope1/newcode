import React from "react";
import { FlatList, Image, Modal, Pressable, Text, TouchableOpacity, View, } from "react-native";
import { BLACK, WHITE } from "../constants/color";
import { HEIGHT, WIDTH } from "../constants/config";
import { Language } from "../assets/data/data";

export const Registeras = ({
    visible = false,
    onBackPress,
    register,
    data = "",
    title = "",
    backgroundColor = `rgba(100, 100, 100, 0.5)`,
}) => {

    const ListView = ({ item }) => {

        return (
            <TouchableOpacity
                onPress={() => {
                    // console.log(item)
                    register(item);
                    onBackPress != undefined && onBackPress(false)
                }}
                style={{
                    height: HEIGHT * 0.07,
                    width: WIDTH * 0.9,
                    backgroundColor: WHITE,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 25,
                    alignItems: 'center',
                }}>

                <Text
                    style={{
                        fontSize: 18,
                        // width: WIDTH * 0.2,
                        // fontFamily: 'Roboto-Medium',
                        color: BLACK,
                    }}>
                    {item.item}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType='slide'
            statusBarTranslucent
            onRequestClose={() => onBackPress != undefined && onBackPress(false)}
        >
            <Pressable
                onPress={() => onBackPress != undefined && onBackPress(false)}
                style={{
                    flex: 1,
                    backgroundColor: backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Pressable
                    style={{
                        // height: 200,
                        width: WIDTH * 0.9,
                        backgroundColor: WHITE,
                        borderRadius: 10,
                        elevation: 5
                    }}
                >
                    <FlatList data={data} renderItem={ListView}
                        style={{
                            maxHeight: HEIGHT * 0.8
                        }}
                        ListHeaderComponent={() => {
                            return (
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <View
                                        style={{
                                            height: HEIGHT * 0.06,
                                            width: WIDTH * 0.8,
                                            justifyContent: 'center',
                                            alignItems: 'flex-start',
                                            marginLeft: 0,
                                            // backgroundColor:'red'
                                        }}>
                                        <Text style={{
                                            // fontFamily: 'Roboto-Bold', 
                                            marginLeft: 10,
                                            fontSize: 25, color: BLACK
                                        }}>{title}</Text>
                                    </View>
                                    <View style={{ height: 3, width: WIDTH * 0.85, backgroundColor: 'lightgray' }}>

                                    </View>
                                </View>
                            );
                        }}
                        ListFooterComponent={() => {
                            return (
                                <View
                                    style={{
                                        height: HEIGHT * 0.01,
                                        //backgroundColor:'green'
                                    }}>
                                </View>
                            );
                        }}

                    />

                </Pressable>
            </Pressable>
        </Modal>
    )
}