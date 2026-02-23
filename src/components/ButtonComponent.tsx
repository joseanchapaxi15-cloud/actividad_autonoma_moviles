import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { stylesGlobal } from '../themes/appThemes';



interface Porps {
    buttonText: string;
    onPress: () => void;
}

export const ButtonComponent = ({ buttonText , onPress }: Porps) => {


    return (
        <TouchableOpacity style={stylesGlobal.button} onPress={onPress}>

            <Text style={stylesGlobal.buttonTex}>{buttonText}</Text>

        </TouchableOpacity>
    )
}
