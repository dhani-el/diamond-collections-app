import { Stack } from "expo-router";


export default function RootLayout() {
  return <Stack>
            <Stack.Screen name="index" options={{headerShown:false}} />
            <Stack.Screen name="Authentication" options={{headerShown:false,title:"Authentication"}} />
            <Stack.Screen name="SingleItemScreen" options={{headerShown:false,title:"SingleItemScreen"}} />
            <Stack.Screen name="landingScreen" options={{headerShown:false,title:"landingScreen"}} />
          </Stack>;
}
