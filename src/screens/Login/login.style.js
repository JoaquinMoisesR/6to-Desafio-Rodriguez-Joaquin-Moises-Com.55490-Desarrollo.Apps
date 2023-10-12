import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.siete,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer:{
        width: '100%',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputEmail: {
        width: '95%',
        backgroundColor: colors.quaternary,
        height: 35,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        backgroundColor: colors.primary,
        width: '50%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 15,
        marginVertical: 10,
    }
})