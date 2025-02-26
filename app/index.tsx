import { Text, View,StyleSheet } from "react-native";

export default function Index() {
  return <View style={Style.mainView}>
            <Text>Edit app/index.tsx to edit this screen.</Text>
          </View>
}

const Style = StyleSheet.create({
  mainView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
