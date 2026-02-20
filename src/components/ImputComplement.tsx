import React from 'react';
import { stylesGlobal } from '../themes/appThemes';

import { KeyboardTypeOptions, TextInput } from 'react-native';


interface Props {
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    handleChangeValue:(name:Number , value:Number)=> void;
    name:Number;
}

export const ImputComponent = ({ placeholder, keyboardType , handleChangeValue,name }: Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(value)=>handleChangeValue(name,value)}

            style={stylesGlobal.input} />
    )
}