import React from "react";
import { TextInput } from "react-native-paper";

type Props = {
    label: string,
    style: object,
    onChange: Function,
    color: string,
    value: string,
    secury?: boolean
    error?: boolean,
    right?: {
        icon: string,
        action: Function
    }
}

const Input: React.FC<Props> = ({label, style, onChange, color, value, secury, right, error}) => {

    return (
       <TextInput  
        label={label} 
        style={style} 
        error={error}
        onChangeText={(e) => onChange(e)} 
        activeUnderlineColor={color}
        underlineColor={color}
        value={value}
        autoCapitalize="none"
        theme={{
            colors: {
                placeholder: color,
                text: color,
            }
        }}
        secureTextEntry={secury}
        right={right ? <TextInput.Icon icon={right.icon} color={color} onPress={right.action}/> : null}
       />
    )
}

export default Input;