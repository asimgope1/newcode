import { useEffect, useRef, useState } from "react"
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { BLACK, PINK, WHITE } from "../constants/color"
import { STYLES, WIDTH } from "../constants/config"
import { ROBOTO_ITALIC, ROBOTO_MEDIUMITALIC, ROBOTO_REGULAR } from "../constants/fontpath"

export const InputTxt = ({
    placeholder = "",
    image = "",
    type = "",
    inputdata = "",
    setInputdata = {},
    keyboardType = 'default',
    editable = true,
    borderColor = PINK,
    maxLength = 100,
    onTouch = "",
    Head="",

}) => {
    const [tap, setTap] = useState(false);

    return (
        <Pressable
            onPress={onTouch != "" ? onTouch : () => { }}
            style={{
                ...Styles.container,
                borderWidth: tap ? 2 : 1,
                borderColor: borderColor,
            }}
        >
            {
                (tap || inputdata != "") &&
                <View style={{ ...Styles.lablebackgroud }} >
                    <Text style={{ ...Styles.lable }}>{Head}</Text>
                </View>
            }
            <View style={{ flexDirection: 'row', flex: 1 }}>
                {
                    image != '' &&
                    <View style={{ ...Styles.imgContainer }}>
                        <Image
                            style={{
                                height: 35,
                                width: 35
                            }}
                            source={image}
                        />
                    </View>
                }
                <TextInput
                    style={{ ...Styles.txtinput }}
                    onChangeText={(res) => {
                        // console.log(res)
                        if (type == 'name') {
                            if (res[0] != " " && (/[a-zA-Z" "]/.test(res[res.length - 1]))) {
                                setInputdata(res);
                            } else if ((/[a-zA-Z" "]/.test(res[res.length - 1]))) {
                                setInputdata(res.slice(0, 0));
                            } else {
                                setInputdata('');
                            }
                        } else if (type == 'number') {
                            if (res[0] != 0 && (/[0-9]/.test(res[res.length - 1]))) {
                                setInputdata(res);
                            } else if ((/[0-9]/.test(res[res.length - 1]))) {
                                setInputdata(res.slice(0, 0));
                            } else {
                                setInputdata('');
                            }
                        } else if (type == 'email') {
                            if ((/[a-zA-Z@0-9_.-]/.test(res[res.length - 1]))) {
                                setInputdata(res);
                            } else {
                                setInputdata('');
                            }
                        } else if (type == 'password') {
                            if ((/[a-zA-Z@0-9*_$.#-]/.test(res[res.length - 1]))) {
                                setInputdata(res);
                            } else {
                                setInputdata('');
                            }
                        } else {
                            // console.log('others')
                            setInputdata(res);
                        }
                    }}
                    value={inputdata}
                    editable={editable}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    placeholder={tap ? "" : placeholder}
                    placeholderTextColor={'gray'}
                    onFocus={() => { setTap(true) }}
                    onEndEditing={() => { setTap(false) }}
                />
            </View>

        </Pressable>
    )
}
const Styles = StyleSheet.create({
    container: {
        height: 50,
        width: WIDTH * 0.9 ,
        backgroundColor: WHITE,
        borderRadius: 15,
        borderWidth: 1,
        elevation: 5
    }, lable: {
        color: BLACK,
        fontFamily:ROBOTO_MEDIUMITALIC
    }, lablebackgroud: {
        backgroundColor: WHITE,
        top: -10,
        left: 10,
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingHorizontal: 5,
        position: 'absolute',
        borderRadius: 10
    }, imgContainer: {
        marginLeft: 10,
        justifyContent: "center",
        alignItems: 'center',
    }, txtinput: {
        flex: 1,
        marginLeft: 10,
        color: BLACK,
        fontFamily:ROBOTO_REGULAR
    }
})