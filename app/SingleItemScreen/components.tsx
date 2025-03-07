
import { View,StyleSheet,Text,Image } from 'react-native';

import EvilIcons from '@expo/vector-icons/EvilIcons';
import PagerView from 'react-native-pager-view';



const iconSize = 24;
const mainContainerPadding = 24;


export function Back(){
    return <View style={styles.iconView}>
                <EvilIcons name="chevron-left" size={iconSize} />
            </View>
}

export function Share(){
    return <View style={styles.iconView}>
                <EvilIcons name="share-google" size={iconSize} />
    </View>
}

export function Like(){
    return <View style={styles.iconView}>
                <EvilIcons name="heart" size={iconSize} />
    </View>
}

export function Head(){
    return <View style={styles.headContainerView}>
                <Back/>
                <View style={styles.innerHeadContainerView}>
                    <Share/>
                    <Like/>
                </View>
    </View>
}

export function Items(){
    return <PagerView style={styles.itemPagerView} initialPage={0}>
                <AnItem/>
                <View  key="2">
                    <Text>Second page</Text>
                </View>
                
                <View  key="3">
                    <Text>Third page</Text>
                </View>
            </PagerView>
}

export function AnItem(){
    return <View style={styles.itemPagerViewChildren} key={1}>
                <Image source={require("../../assets/images/landingImage.jpeg")} />
            </View>
}

const styles = StyleSheet.create({
    iconView:{
        borderRadius:999,
        backgroundColor:"white",
        width: iconSize + iconSize/4,
        height: iconSize + iconSize/4,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    headContainerView:{
        flexDirection:"row",
        justifyContent:"space-between",
        position:"fixed",
        top:"1%",
        left:0,
        padding:mainContainerPadding
    },
    innerHeadContainerView:{
        flexDirection:"row",
        gap:16
    },
    itemPagerView:{
        width:"100%",
        height:"45%",
        backgroundColor:"grey",
        position:"absolute",
        top:0,
        left:0,
        zIndex:-1
    },
    itemPagerViewChildren:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    }
})