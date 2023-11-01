import { Image, Platform, StyleSheet, Text, useWindowDimensions } from 'react-native';
import React, {
    useState,
    useCallback,
    useImperativeHandle,
    forwardRef,
} from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    withSequence,
    withDelay,
    withTiming,
    withSpring,
    runOnJS,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { STYLES } from '../constants/config';
import { ERROR, SUCCESS, WARNING } from '../constants/imagepath';
export const Toast = forwardRef(({ }, ref) => {

    const toastTopAnimation = useSharedValue(-100);
    const [showing, setShowing] = useState(false);
    const [toastType, setToastType] = useState('success');
    const [toastText, setToastText] = useState('');
    const [toastDuration, setToastDuration] = useState(0);
    const TOP_VALUE = Platform.OS === 'ios' ? 60 : 20;
    useImperativeHandle(
        ref,
        () => ({
            show,
        }),
        [show],
    );
    const show = useCallback(
        ({ type, text, duration }) => {
            setShowing(true);
            setToastType(type);
            setToastText(text);
            setToastDuration(duration);
            toastTopAnimation.value = withSequence(
                withTiming(TOP_VALUE),
                withDelay(
                    duration,
                    withTiming(-100, finish => {
                        if (finish) {
                            runOnJS(setShowing)(false);
                        }
                    }),
                ),
            );
        },
        [TOP_VALUE, toastTopAnimation],
    );
    const animatedTopStyles = useAnimatedStyle(() => {
        return {
            top: toastTopAnimation.value,
        };
    });
    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startY = toastTopAnimation.value;
        },
        onActive: (event, ctx) => {
            if (event.translationY < 400) {
                toastTopAnimation.value = withSpring(ctx.startY + event.translationY, {
                    damping: 600,
                    stiffness: 100,
                });
            }
        },
        onEnd: event => {
            if (event.translationY < 0) {
                toastTopAnimation.value = withTiming(-100, finish => {
                    if (finish) {
                        runOnJS(setShowing)(false);
                    }
                });
            } else if (event.translationY > 0) {
                toastTopAnimation.value = withSequence(
                    withTiming(TOP_VALUE),
                    withDelay(
                        toastDuration,
                        withTiming(-100, finish => {
                            if (finish) {
                                runOnJS(setShowing)(false);
                            }
                        }),
                    ),
                );
            }
        },
    });
    return (
        <>
            {showing && (
                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View
                        style={[
                            {
                                ...styles.toastContainer,
                                borderBottomColor: toastType === 'success'
                                    ? 'green'
                                    : toastType === 'warning'
                                        ? 'orange' : 'red'
                            }
                            , animatedTopStyles
                        ]}>
                        <Image
                            source={
                                toastType === 'success'
                                    ? SUCCESS
                                    : toastType === 'warning'
                                        ? WARNING
                                        : ERROR
                            }
                            style={styles.toastIcon}
                        />
                        <Text style={{ ...styles.toastText, }}>{toastText}</Text>
                    </Animated.View>
                </PanGestureHandler>
            )}
        </>
    );
});

const styles = StyleSheet.create({
    toastContainer: {
        position: 'absolute',
        top: 0,
        width: '80%',
        padding: 10,
        borderRadius: 18,
        backgroundColor: 'white',
        //borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        ...STYLES.elevation,
        borderBottomWidth: 5,
        // borderColor:

    },
    toastText: {
        marginLeft: 14,
        fontSize: 16,
        color: 'black'
    },
    toastIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
});