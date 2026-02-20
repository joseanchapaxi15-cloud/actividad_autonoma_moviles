import { StyleSheet } from "react-native";

export const stylesGlobal = StyleSheet.create({
    title: {
        color: "white",
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingTop: 70
    },
    containerBody: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 40
    },
    input: {
        backgroundColor: 'green',
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 7

    },
    containerImput: {
        marginVertical: 15
    },
    titleWelcome: {
        fontSize: 17,
        fontWeight: 'bold'
    },

    button: {
        backgroundColor: 'blue',
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonTex: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },


    logoContainer: {
        alignItems: 'center',      // Centra horizontalmente
        justifyContent: 'center',  // Centra verticalmente (si el contenedor tiene altura)
        width: '100%',             // Ocupa todo el ancho para que el centro sea el real
        marginBottom: 30,
    },
    logo: {
        width: 180,
        height: 180,
        borderRadius: 90,
        borderWidth: 3,
        borderColor: 'white',      // No olvides un color para que el borde se vea
    }



})