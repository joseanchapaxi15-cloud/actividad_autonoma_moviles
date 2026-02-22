import { StyleSheet } from "react-native";

// Definimos una paleta de colores constante para no repetir
const COLORES = {
    primario: '#2ecc71',    // Un verde más elegante
    secundario: '#3498db',  // Un azul más moderno
    oscuro: '#2c3e50',
    blanco: '#ffffff',
    grisSuave: '#f5f6fa'
};

export const stylesGlobal = StyleSheet.create({
    title: {
        color: COLORES.blanco,
        fontSize: 30,           // Un poco más grande
        fontWeight: '800',      // Más impacto
        paddingHorizontal: 30,
        paddingTop: 60,
        letterSpacing: 1.5,     // Espaciado entre letras pro
        textTransform: 'uppercase'
    },
    containerBody: {
        backgroundColor: COLORES.grisSuave, // Color crema suave en lugar de blanco puro
        borderTopLeftRadius: 40,            // Curvas más pronunciadas
        borderTopRightRadius: 40,
        paddingHorizontal: 30,
        paddingTop: 40,
        // Sombra para dar profundidad
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -10 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
    },
    input: {
        backgroundColor: COLORES.blanco, // Fondo blanco para los inputs
        paddingHorizontal: 20,
        paddingVertical: 12,            // Más altura para comodidad
        borderRadius: 12,
        marginVertical: 10,
        fontSize: 16,
        color: COLORES.oscuro,
        // Borde sutil en lugar de color sólido
        borderWidth: 1,
        borderColor: '#dcdde1',
    },
    containerImput: {
        marginVertical: 15
    },
    titleWelcome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORES.oscuro,
        marginBottom: 10
    },
    button: {
        backgroundColor: COLORES.secundario,
        paddingVertical: 16,
        borderRadius: 15,
        marginVertical: 20,
        // Sombra de botón
        shadowColor: COLORES.secundario,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonTex: {
        textAlign: 'center',
        color: COLORES.blanco,
        fontSize: 17,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 30,
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 4,
        borderColor: COLORES.blanco,
        // Sombra para el logo
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    }
});