

import  {View,Text,SafeAreaView,StyleSheet} from "react-native"
import { Button,TextInput } from "react-native-paper"

export default function Signup(){
    return <View style={styles.container}>
                <SafeAreaView/>
                <View style={styles.contentContainer} >
                    <Text style={styles.identtityText} >Create Account</Text>
                    <View style={styles.inputView}>
                        <TextInput mode="outlined" outlineStyle={{borderColor:"#DEDEDE",borderRadius:12}} placeholder="Email Address" inputMode="email" style={styles.inputs} />
                        <TextInput secureTextEntry right={<TextInput.Icon icon={"eye"} />} mode="outlined" outlineStyle={{borderColor:"#DEDEDE",borderRadius:12}}  placeholder="Password"  style={styles.inputs} />
                        <TextInput secureTextEntry right={<TextInput.Icon icon={"eye"} />} mode="outlined" outlineStyle={{borderColor:"#DEDEDE",borderRadius:12}}  placeholder="Confirm Password"  style={styles.inputs} />
                        <Button textColor="white" style={styles.button}  >
                            Submit
                        </Button>
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
        gap:200,
        padding:12
    },
    identtityText:{
        fontWeight:"800",
        fontSize:36,
        marginTop:100
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
        // borderColor:"#DEDEDE",
        // borderStyle:"solid",
        // borderWidth:2,
        // borderRadius:6,
        paddingLeft:2,
        paddingTop:2,
        paddingBottom:2,
        paddingRight:2,
        backgroundColor:"#FAFAFA",
        fontSize:18,
        fontWeight:"600"
    },
    button:{
        padding:16,
        fontSize:24,
        backgroundColor:"black",
        width:"90%",
        color:"white"
      },
    terms:{
        width:"80%"
    },
    innerTerms:{
        fontWeight:"700",
        textDecorationColor:"black",
        textDecorationStyle:"solid",
        textDecorationLine:"underline"
    }
})