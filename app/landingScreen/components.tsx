import { useState} from "react";
import { View,StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Link } from "expo-router";

export function SearchBarComponent(){
    const [searchQuery,setSearchQuery] = useState<string>("");

    function handleSearchChange(value:string){
        setSearchQuery(()=>value)
    }

    function handleCameraClick(){

    }

    function RightProp(){
        function handleCloseIconClick(){
            setSearchQuery(()=>"")
        }
        return searchQuery == "" ? <Link href={"/landingScreen/cameraScreen"} style={styles.searchBarIconStyle} ><EvilIcons name="camera" size={28} style={styles.searchBarIconStyle} /></Link> : <EvilIcons name="close" size={24} onPress={handleCloseIconClick} style={styles.searchBarIconStyle} />
    }


    return <View style={styles.containerView}>
                <Searchbar right={RightProp}  mode="bar" theme={{colors:{elevation:{level3:"white"}}}} style = {styles.searchBarStyle} placeholder="Search For DC Anything"  onChangeText={handleSearchChange} value={searchQuery}  />
            </View>
}

type ItemsAd = {
    image:string,
    text:string,
    url:string,
    code?:string,
    pre?:string
}[]

export function ItemAds(){
    const items:ItemsAd = [];

    return <View>
                {items.map(function(anItem){
                    return <ASingleItemAd/>
                })}
            </View>

}

function ASingleItemAd(){
    return <View>

    </View>
}

const styles = StyleSheet.create({
    containerView:{
        padding:12,
    },
    searchBarStyle:{
        backgroundColor:"white"
    },
    searchBarIconStyle:{
        paddingRight:12
    },
    searchBarCameraLinkStyle:{
        paddingRight:12
    }
})