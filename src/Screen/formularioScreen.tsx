import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { stylesGlobal } from '../themes/appThemes';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { ImputComponent } from '../components/ImputComplement';
import { CommonActions, useNavigation } from '@react-navigation/native';


interface Formlario {
    num1: string;
    num2: string;
}

export const FormularioScreen = () => {
    const navigation = useNavigation();
    const [valores, setValores] = React.useState({
        num1: '',
        num2: '',
    });


    
    const handleChangeValue = (name: string, value: string): void => {
        console.log(name, " ", value, "  ");
        setValores({...valores,
            [name]: value  
        });

    }
    
    const handleCalcularConsola = () => {
        const n1 = parseFloat(valores.num1);
        const n2 = parseFloat(valores.num2);

        
        if (n1 === 0 && n2 === 0) {
            console.log("RESULTADO: INDETERMINACIÓN");
        } else if (n2 === 0) {
            console.log("RESULTADO: NO EXISTE DIVISIÓN PARA CERO");
        } else {
            const res = n1 / n2;
            console.log(`RESULTADO DE LA DIVISIÓN: ${res}`);
        }
    }
    return (
        <View >
            <TitleComponent title='Formulario' />
            <BodyComponent>
                <Text style={stylesGlobal.titleWelcome} >Realiza tu calculo </Text>
                <Text>Realiza tu diviciones en esta tu App</Text>
                <View>
                    <ImputComponent placeholder='numero 1' keyboardType='numeric' name="num1"
                        handleChangeValue={handleChangeValue  } />
                    <ImputComponent placeholder='numero 2' keyboardType='numeric' name="num2"
                        handleChangeValue={handleChangeValue} />
                </View>
                <ButtonComponent buttonText='CALCULAR' onPress={handleCalcularConsola}
                />
                <ButtonComponent buttonText='IR A INICIO' onPress={()=>navigation.dispatch(CommonActions.navigate({name:'Bienvenido'}))}
                />
            </BodyComponent>
        </View>
    )
}
