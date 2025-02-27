import { Text, View,StyleSheet } from "react-native";

import Authentication from "./UI/Authentication";

export default function Index() {
  return <View style={Style.mainView}>
            <Authentication/>
          </View>
}

const Style = StyleSheet.create({
  mainView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
