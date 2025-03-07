import styled from "styled-components/native";
import {StyleSheet,SafeAreaView,View } from "react-native";
import {Image} from "expo-image";
import {Button} from "react-native-paper";
import { Link } from "expo-router";

const landingImage  = require("../assets/images/hicon.png")

const Container  = styled.View`
`


export default function Index() {

    return <>
              <SafeAreaView/>
              <Container style={styles.mainContainer}>
                <Image style={styles.image} source={landingImage} />
                <View style={styles.buttonsContainer}>
                    <Link style={styles.buttonLinkStyle} href={"/Authentication/signup"}>
                      <Button  mode="contained" textColor="white" style = {{...styles.buttons,...styles.signupButton}} >
                        Sign Up
                      </Button>
                    </Link>
                    <Link style={styles.buttonLinkStyle} href={"/Authentication/login"}>
                      <Button  mode="contained"  textColor="white"   style = {{...styles.buttons,...styles.loginButton}}>Login</Button>
                    </Link>
                </View>
              </Container>
            </>
}


const styles = StyleSheet.create({
  image:{
    objectFit:"fill",
    width:300,
    height:300,
    marginTop:150
  },
  buttonLinkStyle:{
    width:"100%"
  },
  buttonsContainer:{
    width:"100%",
    flex:1,
    alignItems:"center",
    gap:36,
  },
  buttons:{
    padding:16,
    // fontSize:48,
    width:"100%",
    borderRadius:12
  },
  signupButton:{
    backgroundColor:"black"
  },
  loginButton:{
    backgroundColor:"#ec7d3c",
  },
  mainContainer:{
    flex:1,
    gap:100,
    alignItems:"center",
    padding:36,
    backgroundColor:"white"}
})