import React from "react";
import { TouchableOpacity, Text } from "react-native";

type Props = {
    style: {
        button: object,
        title: object
    },
    title: string,
    onClick: Function
}

const Button: React.FC<Props> = ({style, title, onClick}) => {
    return(
        <TouchableOpacity style={style.button} onPress={() => onClick()}>
            <Text style={style.title}>{title}</Text>
        </TouchableOpacity>
    )

}

export default Button;
