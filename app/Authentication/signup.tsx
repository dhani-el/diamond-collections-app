

import  {View,Text,SafeAreaView,StyleSheet,Image} from "react-native";
import { Button,TextInput } from "react-native-paper";
const landingImage  = require("../../assets/images/hicon.png")
const apple = require("../../assets/images/icons8-apple-50.png");
const google = require("../../assets/images/icons8-google-48.png");
const facebook = require("../../assets/images/icons8-facebook-48.png");
import { Link } from "expo-router";

export default function Signup(){
    return <View style={styles.container}>
                <SafeAreaView/>
                <View style={styles.contentContainer} >
                    <Image style={styles.image} source={landingImage} />
                    <Text style={styles.identtityText} >Create Account</Text>
                    <View style={styles.authViews}>
                        <Button>
                            <Image style={styles.loginImages} source={google} />
                        </Button>
                        <Button>
                            <Image style={styles.loginImages} source={apple} />
                        </Button>
                        <Button>
                            <Image style={styles.loginImages} source={facebook} />
                        </Button>
                    </View>
                    <View style={styles.inputView}>
                        <TextInput mode="outlined" outlineStyle={{borderColor:"#DEDEDE",borderRadius:12}} placeholder="Email Address" inputMode="email" style={styles.inputs} />
                        <TextInput secureTextEntry right={<TextInput.Icon icon={"eye"} />} mode="outlined" outlineStyle={{borderColor:"#DEDEDE",borderRadius:12}}  placeholder="Password"  style={styles.inputs} />
                        <TextInput secureTextEntry right={<TextInput.Icon icon={"eye"} />} mode="outlined" outlineStyle={{borderColor:"#DEDEDE",borderRadius:12}}  placeholder="Confirm Password"  style={styles.inputs} />
                        <Button textColor="white" style={styles.button}  >
                            Submit
                        </Button>
                        <Text>Already have an account? <Link href="/Authentication/login" style={styles.signinLink} >Sign In</Link></Text>
                    </View>
                    <Text style={styles.terms} >
                        By Creating an Account You are Agreeing to our <Text style={styles.innerTerms}>Terms and Conditions.</Text>
                    </Text>
                </View>
            </View>
}


const styles  = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    contentContainer:{
        flex:1,
        alignItems:"center",
        padding:12
    },
    identtityText:{
        fontWeight:"800",
        fontSize:36,
        marginBottom:80
    },
    inputView:{
        // flex:1,
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        gap:24
    },
    inputs:{
        width:"90%",
        paddingLeft:2,
        paddingTop:2,
        paddingBottom:2,
        paddingRight:2,
        backgroundColor:"#FAFAFA",
        fontSize:14,
        fontWeight:"600"
    },
    authViews:{
        width:"100%",
        justifyContent:"space-around",
        flexDirection:"row",
        padding:12,
    },
    loginImages:{
        width:50,
        height:50
    },
    button:{
        padding:16,
        fontSize:24,
        backgroundColor:"black",
        width:"90%",
        color:"white"
      },
    terms:{
        width:"80%", 
        marginTop:30,
    },
    innerTerms:{
        fontWeight:"700",
        textDecorationColor:"black",
        textDecorationStyle:"solid",
        textDecorationLine:"underline"
    },
    image:{
        objectFit:"fill",
        width:250,
        height:250,
        marginTop:20
      },
    signinLink:{
        fontWeight:"700",
        textDecorationLine:"underline",
    }
})