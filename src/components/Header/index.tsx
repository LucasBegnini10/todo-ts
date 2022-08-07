import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import colors from "../../config/colors";

//CONTEXT
import {UserContext} from "../../context/userContext"
import {UserContextType} from "../../types/userType"
import { fontResize } from "../../utils/fontResize";

//ICONS
import { AntDesign } from '@expo/vector-icons';



const Header: React.FC = () => {

    const {user} = React.useContext(UserContext) as UserContextType

    return(
        <View style={styles.container}>
            <View style={styles.viewHeader}>
                <View style={styles.iconUser}>
                    <TouchableOpacity style={styles.buttonIconUser}>
                        <AntDesign name="user" size={fontResize(28)} color={colors.tertiary} />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTextHeader}>
                    <Text style={styles.textHeader}>Olá, {user.name !== "" ? user.name : "bem vindo de volta!"}</Text>
                </View>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "17%",
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        backgroundColor: colors.primary
    },
    viewHeader: {
        width: "85%",
        height: "70%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconUser: {
        height: "60%",
        width: "20%",
        justifyContent: 'center',
        alignItems :'center'
    },
    buttonIconUser: {
        height: "100%",
        width: '90%',
        borderRadius: 200,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        color: colors.tertiary,
        fontSize: fontResize(18),
        textAlign :'center'
    },
    viewTextHeader: {
        width: "50%",
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
    
})

export default Header;