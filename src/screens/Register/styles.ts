import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {COLORS} from '../../constants'

export default StyleSheet.create({
    container: {
        paddingVertical: 40,
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        flex: 1,
    },

    titleSection: {
        alignItems: 'center'
    },

    heyThere: {
        fontSize: 16,
        color: COLORS.blackColor,
        paddingVertical: 4,
        fontFamily: 'Poppins-Regular',
    },

    createAccount: {
        fontSize: 20,
        color: COLORS.blackColor,
        paddingVertical: 5,
        fontFamily: 'Poppins-Bold',
    },

    labelSection: {
        marginTop: 30,
        width: '100%',
        flex: 1
    },

    registerContainer: {
        justifyContent: 'space-between',
        height: '100%'
    },

    label: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        // paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: COLORS.borderColor,
        borderRadius: 14,
        gap: 10,
        height: 50
    },

    icon: {
        height: 15,
        width: 15
    },

    input: {
        flex: 1,
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: COLORS.blackColor,
    },

    policyWrapper: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center'
    },

    policy: {
        flexWrap: 'wrap',
        flex: 1,
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
    },
    
    policyAndTerm: {
        textDecorationLine: 'underline',
    },

    btnSection: {
        marginBottom: 20,
    },

    registerBtn: {
        alignItems: 'center',
        paddingVertical: 18,
        borderRadius: 99
    },

    btnLabel: {
        fontFamily: 'Poppins-Bold',
        color: '#fff'
    },

    orSection: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%', 
        gap: 10,
        justifyContent: 'center'
    },

    line: {
        borderBottomColor: COLORS.thirdGrayColor,
        borderBottomWidth: 1,
        flex: 1
    },

    orLabel: {
        color: COLORS.blackColor,
        fontFamily: 'Poppins-Regular',
        fontSize: 12
    },

    otherLoginSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
        marginBottom: 30
    },

    otherLoginBtn: {
        borderRadius: 14,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderColor: COLORS.thirdGrayColor,
        borderWidth: 1
    },

    otherLoginIcon: {
        height: 20,
        width: 20
    },

    loginSection: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    loginLabel: {
        fontSize: 14
    },

    errorMsg: {
        color: 'red',
        fontSize: 10,
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Poppins-Regular'
    }
})