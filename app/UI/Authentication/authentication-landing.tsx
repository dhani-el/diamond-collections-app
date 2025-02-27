import styled from "styled-components/native"
import {StyleSheet } from "react-native"
import {Image} from "expo-image"



const Container  = styled.View`
`

const SignUpButton = styled.Button`
  border-radius:12px;
  background-color:black;
  padding:1rem;
`


export default function AuthLandingScreen(){
    return <Container>
                <Image style={styles.image} source={'../../../assets/images/icon.png'} />
            </Container>
}





const styles = StyleSheet.create({
  image:{
    width:500,
    height:500,
  }
})