import React, { useEffect} from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

import colors from '../../../config/colors';

const Dim = 60;

export default function Loader5(){
    
    const color1 = colors.tertiary;
    const color2 = colors.tertiary;
    const color3 = colors.tertiary;
    const color4 = colors.tertiary;
    const color5 = colors.tertiary;
    const animation = new Animated.Value(0)

    useEffect(() => {
        Animated.loop(Animated.timing(animation, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: true
        })).start();
    }, [])
    
    const angle = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['0deg', '72deg', '360deg']
    })
    const angle0 = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['0deg', '144deg', '360deg']
    })
    const angle1 = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['0deg', '216deg', '360deg']
    })
    const angle2 = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['0deg', '288deg', '360deg']
    })
    const angle3 = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['0deg', '360deg', '360deg']
    })
    const outerAngle = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '720deg']
    })

    return (
        <View style={styles.container}>
            <Animated.View style={{ width: Dim, height: Dim, transform: [{ rotate: outerAngle }] }}>
                <Animated.View style={{ ...styles.item, transform: [{ rotate: angle3 }] }}>
                    <View style={{ ...styles.innerItem, backgroundColor: color1 }}></View>
                </Animated.View>
                <Animated.View style={{ ...styles.item, transform: [{ rotate: angle2 }] }}>
                    <View style={{ ...styles.innerItem, backgroundColor: color2 }}></View>
                </Animated.View>
                <Animated.View style={{ ...styles.item, transform: [{ rotate: angle1 }] }}>
                    <View style={{ ...styles.innerItem, backgroundColor: color3 }}></View>
                </Animated.View>
                <Animated.View style={{ ...styles.item, transform: [{ rotate: angle0 }] }}>
                    <View style={{ ...styles.innerItem, backgroundColor: color4 }}></View>
                </Animated.View>
                <Animated.View style={{ ...styles.item, transform: [{ rotate: angle }] }}>
                    <View style={{ ...styles.innerItem, backgroundColor: color5 }}></View>
                </Animated.View>
            </Animated.View>
        </View>
    );
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        width: Dim,
        height: Dim,
        borderWidth: 0,
        backgroundColor: 'transparent',
        position: 'absolute',
        justifyContent: 'center'
    },
    innerItem: {
        height: 10,
        width: 10,
        borderRadius: 10
    }
})
