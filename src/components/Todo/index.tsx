import React, {useState} from "react";
import {View, Text} from "react-native";
import { fontResize } from "../../utils/fontResize";
import colors from "../../config/colors"

import {heightPercentageToDP, widthPercentageToDP} from "../../utils/percentageToPx"
import { FontAwesome, Feather  } from '@expo/vector-icons';

interface Props  {
    title: String,
    description: String,
    fcRemove?: () => void,
    fcUpdate?: () => void,
}

const TodoComponent: React.FC<Props> = ({title, description, fcRemove, fcUpdate}) => {

    return(
        <View style={{
                width: widthPercentageToDP('90%'), 
                minHeight: heightPercentageToDP('10%'),
                borderWidth: 1,
                borderColor: colors.secondary,
                flexDirection: "row",
                alignItems: 'center',
                justifyContent: 'space-around'
            }}>
            <Feather name="edit-2" size={24} color={colors.tertiary} onPress={fcUpdate}/>

            <View style={{height: "100%", width: "40%", justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{
                    color: colors.tertiary, 
                    fontSize: fontResize(20), 
                    fontWeight: 'bold', 
                }}>
                    {title}
                </Text>
                <Text  style={{color: colors.tertiary, fontSize: fontResize(16)}} >
                    {description}
                </Text>
            </View>
            <FontAwesome name="close" size={24} color="red" onPress={fcRemove}/>
        </View>
    )
}

export default TodoComponent;