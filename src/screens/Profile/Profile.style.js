import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.quaternary,
    },
    image:{
        width: 200,
        height: 200,
    },
    buttonCamara:{
        backgroundColor: colors.siete,
        height: 45,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginBottom: 10,
        marginVertical: 30,
    },
    textoPerfil:{
        fontSize: 18,
        color: 'white',

    },    
})