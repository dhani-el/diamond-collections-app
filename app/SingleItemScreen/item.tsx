
import { View,SafeAreaView,StyleSheet} from "react-native";

import { Head,Items } from "./components";

const mainContainerPadding = 24;

export default function SingleItem(){
    return <View style={styles.container}>
                <SafeAreaView/>
                <Head/>
                <Items/>
    </View>
}




const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        // padding:mainContainerPadding,
    },

});