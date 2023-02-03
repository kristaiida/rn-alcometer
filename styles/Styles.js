import { StyleSheet } from "react-native";
import Constants from "expo-constants";


export default StyleSheet.create({
    container: {
        flex:1,
        marginTop: Constants.statusBarHeight+10,
        padding: 30
    },
    switchRow:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        alignSelf: "flex-end"
    },
    switch:{
        alignSelf:"flex-start",
    },
    textInput:{
        borderBottomWidth: 1,
        padding: 5,
        marginBottom: 20
    },
    header: {
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom: 30,
        textAlign: 'center'
    },
    head: {
        fontSize: 18,
        paddingBottom: 10
    },
    num: {
        paddingBottom: 15
    },
    button: {
        padding: 30
    },
    total: {
        fontWeight: 'bold',
        fontSize: 45,
        textAlign: 'center',
        paddingTop: 20
    }
});



