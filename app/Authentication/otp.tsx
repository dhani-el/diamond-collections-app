
import { View,StyleSheet,Text,SafeAreaView } from "react-native";
import { Button } from "react-native-paper";
import OTPTextView from 'react-native-otp-textinput';

export default function OtpPage(){
    return <View style={styles.container}>
                <SafeAreaView/>
                <View style = {styles.innerContainer}>
                    <Text style={styles.otpText}>ENTER OTP CODE</Text>
                    <View style={styles.optView} >
                        <OTPTextView  autoFocus  tintColor={"black"} textInputStyle={{...styles.roundedTextInput}} />
                        <Button textColor="white" style={styles.submitButton} >Submit</Button>
                    </View>
                </View>
    </View>
}


const styles  = StyleSheet.create({
    container:{
        flex:1,
    },
    innerContainer:{
        flex:1,
        padding:32,
        gap:50
    },
    submitButton:{
        padding:12,
        backgroundColor:"black",
        borderRadius:12,
        color:"white"
    },
    otpText:{
        fontSize:16,
        fontWeight:"700",
        marginTop:50
    },
    optView:{
        gap:350
    },
    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 2,
        width:75,
        height:90,
        borderColor:"#ec7d3c",
        shadowColor:"#000"
    },
})