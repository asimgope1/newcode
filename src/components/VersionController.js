import React, { useEffect } from "react";
import { Alert, Image, Linking, Modal, Pressable, Text, View, } from "react-native";
import firestore from '@react-native-firebase/firestore';

import VersionInfo from 'react-native-version-info';
import { HEIGHT, WIDTH } from "../constants/config";
import { BLACK, WHITE } from "../constants/color";
import { getForceUpdate } from "../utils/Firebase";


export const versionCheck = async () => {

    try {
        const version = await firestore()
            .collection('version')
            .doc('version')
            .get();
        // console.log(version?._data)
        return version;
    } catch (err) {
        console.log('err', err)
    }
}
export const VersionController = ({
    visible = false,
    onBackPress,
    data = false,
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
                onPress={() => onBackPress != undefined && onBackPress(false)}
                style={{
                    flex: 1,
                    backgroundColor: backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <View style={{
                    height: 150,
                    width: WIDTH * 0.9,
                    backgroundColor: WHITE,
                    borderRadius: 10,
                    elevation: 5
                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        // backgroundColor:'red'
                    }}>
                        <View
                            style={{
                                height: HEIGHT * 0.08,
                                width: WIDTH * 0.8,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginLeft: 0,
                            }}>
                            <Text style={{
                                // fontFamily: 'Roboto-Bold',
                                marginLeft: 10,
                                fontSize: 20, color: BLACK
                            }}>{'There is a new update here '}</Text>
                            <Text style={{
                                // fontFamily: 'Roboto-Bold',
                                marginLeft: 10,
                                fontSize: 20, color: BLACK
                            }}>{'Update now for new features'}</Text>
                        </View>

                        {/* <View style={{ height: 3, width: WIDTH * 0.85, backgroundColor: 'lightgray' }}/> */}

                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        {
                            (!data.forceUpdate) &&
                            <Text
                                onPress={() => {
                                    onBackPress != undefined && onBackPress(false)
                                }}
                                style={{
                                    // fontFamily: 'Roboto-Bold',
                                    marginLeft: 20,
                                    fontSize: 20, color: 'red'
                                }}>{`Don't Update`}</Text>}
                        <Text
                            onPress={() => {
                                Linking.openURL('https://play.google.com/store/apps/details?id=com.google.android.apps.photos');
                            }}
                            style={{
                                // fontFamily: 'Roboto-Bold',
                                marginLeft: 20,
                                right: 20,
                                position: 'absolute',
                                fontSize: 20, color: 'blue'
                            }}>{`Update`}</Text>
                    </View>
                </View>
            </Pressable>
        </Modal>
    )
}