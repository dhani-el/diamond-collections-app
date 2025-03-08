
import { View,StyleSheet,Text,SafeAreaView,Dimensions } from "react-native";
import { Button } from "react-native-paper";
import OTPTextView from 'react-native-otp-textinput';
import { Link } from "expo-router";

const screenWidth = Dimensions.get("screen").width


export default function OtpPage(){
    return <View style={styles.container}>
                <SafeAreaView/>
                <View style = {styles.innerContainer}>
                    <Text style={styles.otpText}>ENTER OTP CODE</Text>
                    <View style={styles.optView} >
                        <OTPTextView  autoFocus containerStyle={{padding:0,margin:0}}  tintColor={"black"} textInputStyle={{...styles.roundedTextInput}} />
                        <Link style={styles.otpLink} href={"/SingleItemScreen/item"} >
                            <Button textColor="white" style={styles.submitButton} >Submit</Button>
                        </Link>
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
        // padding:12,
        height:42,
        backgroundColor:"black",
        borderRadius:12,
        color:"white",
        width:"100%"
    },
    otpLink:{
        width:"100%"
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
        borderWidth: 1,
        width:"20%",
        height:screenWidth *(18/100),
        borderColor:"#ec7d3c",
        shadowColor:"#000"
    },
})