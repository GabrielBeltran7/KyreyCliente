import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginUser } from "./src/screens/users/Login/LoginUser";
import { RegisterUser } from "./src/screens/users/Register/RegisterUser";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegisterUser">
        <Stack.Screen
          name="LoginUser"
          component={LoginUser}
          options={{ title: "Inicio de Sesion" }}
        />
        <Stack.Screen
          name="RegisterUser"
          component={RegisterUser}
          options={{ title: "Registro" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
