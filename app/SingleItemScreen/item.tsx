
import { View,SafeAreaView,StyleSheet } from "react-native";
import { Share,Back,Like } from "./components";

export default function SingleItem(){
    return <View style={styles.container}>
                <SafeAreaView/>
                <Head/>

    </View>
}

function Head(){
    return <View style={styles.headContainerView}>
                <Back/>
                <View style={styles.innerHeadContainerView}>
                    <Share/>
                    <Like/>
                </View>
    </View>
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        padding:24
    },
    headContainerView:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    innerHeadContainerView:{
        flexDirection:"row",
        gap:16
    }
});