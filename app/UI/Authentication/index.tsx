import styled from "styled-components/native"


import AuthLandingScreen from "./authentication-landing"


const MainContainer = styled.View`
`

export default function Authentication(){
    return <MainContainer>
                <AuthLandingScreen/>
            </MainContainer>
}