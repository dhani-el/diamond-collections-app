
import { View,StyleSheet } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const iconSize = 36;

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


const styles = StyleSheet.create({
    iconView:{
        borderRadius:999,
        backgroundColor:"white",
        width: iconSize + iconSize/4,
        height: iconSize + iconSize/4,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    }
})