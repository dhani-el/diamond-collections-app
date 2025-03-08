import { useState} from "react";
import { View,StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export function SearchBarComponent(){
    const [searchQuery,setSearchQuery] = useState<string>("");

    function handleSearchChange(value:string){
        setSearchQuery(()=>value)
    }
    return <View style={styles.containerView}>
                <Searchbar  mode="bar"  style = {styles.searchBarStyle} placeholder="Search For DC Anything"  onChangeText={handleSearchChange} value={searchQuery}  />
            </View>
}


const styles = StyleSheet.create({
    containerView:{
        padding:12,
    },
    searchBarStyle:{
        backgroundColor:"white"
    }
})