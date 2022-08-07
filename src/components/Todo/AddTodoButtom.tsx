import React from "react";
import {TouchableOpacity, Text} from "react-native"
import colors from "../../config/colors";
import { fontResize } from "../../utils/fontResize";

import { AntDesign } from '@expo/vector-icons';
import {NavigationProp} from "@react-navigation/native"

interface Props{
    navigation: NavigationProp<any, any>
}

const AddTodoButtom:React.FC<Props> = ({navigation}) => {

    return(
        <TouchableOpacity 
            onPress={() => navigation.navigate("AddTodoItem")}
            style={{
                position: 'absolute', 
                bottom: 50,
                right: 50,
                justifyContent: 'center',
                alignItems: "center",
                zIndex: 1,
                backgroundColor: colors.tertiary,
                borderRadius: 200
            }}>
            <AntDesign name="pluscircle" size={fontResize(60)} color={colors.primary} />
        </TouchableOpacity>
    )
}

export default AddTodoButtom;