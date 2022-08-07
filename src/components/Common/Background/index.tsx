import React from "react";
import {StyleSheet} from "react-native";

import colors from "../../../config/colors";

import { LinearGradient } from 'expo-linear-gradient';


const Background: React.FC= ({children}) => {
    return (
        <LinearGradient style={{...styles.container}} colors={[colors.background, "#3f4a54"]}>
            {children}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Background;