import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        
    },

    img: {
        width: '100%',
        height: height * 0.35,
        resizeMode: 'contain',
    },

    profileText: {
        alignItems: 'center',
        marginTop: 30,
    },

    complete: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        color: COLORS.blackColor
    },

    knowMore: {
        color: COLORS.firstGrayColor,
        fontFamily: 'Poppins-Regular',
        fontSize: 12
    },

    labelSection: {
        paddingHorizontal: 40,
        flex: 1,
        marginTop: 30,
        width: '100%',
        
    },

    completeProfileSection: {
        flex: 1,
        width: '100%'
    },

    label: {
        borderRadius: 14,
        backgroundColor: COLORS.borderColor,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 50,
    },

    icon: {
        height: 18,
        width: 18
    },

    dateofbirthBtn: {
        flex: 1,
    },

    btnText: {
        fontFamily: 'Poppins-Regular',
        color: COLORS.blackColor,
        fontSize: 12
    },

    twoFinalLabels: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },

    input: {
        flex: 1,
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
    },

    in4Btn: {
        padding: 15,
        borderRadius: 14,
        marginLeft: 15,
        width: 50,
        height: 50
    },

    in4: {
        color: '#fff',
        fontFamily: 'Poppins-Medium',
        fontSize: 12
    },

    nextBtnContainer: {
        marginTop: 15,
    },

    nextBtn: {
        paddingVertical: 18,
        alignItems: 'center',
        borderRadius: 99
    },

    nextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3
    },

    nextBtnText: {
        color: '#fff',
        fontFamily: 'Poppins-Bold',
        fontSize: 16
    },

    errorMsg: {
        color: 'red',
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        paddingLeft: 10,
        marginBottom: 5
    }
})