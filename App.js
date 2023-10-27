import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegisterUser } from "./src/screens/users/Register/RegisterUser";
import { Provider } from "react-redux";
import { store } from "./src/Redux/Store";
import { LoginUser } from "./src/screens/users/Login/LoginUser";
import { UserRecoverPassword } from "./src/screens/users/UserRecoverPassword/UserRecoverPassword";
import HomeMain from "./src/screens/home/HomeMain/HomeMain";
import Account from "./src/screens/users/Acoount/Account";
import CameraComponents from "./src/components/Camera/Camera/CameraComponents"; 
import ImagePickerComponent from "./src/components/Camera/ImagePicker/ImagePickerComponent";



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginUser">
          <Stack.Screen
            name="LoginUser"
            component={LoginUser}
            options={{ title: "Inicio de Sesion" }}
          />
          <Stack.Screen
            name="ImagePickerComponent"
            component={ImagePickerComponent}
            options={{ title: "Selcciona una imagen" }}
          />

         <Stack.Screen
            name="CameraComponents"
            component={CameraComponents}
            options={{ title: "camara" }}
          />
          
          <Stack.Screen
            name="UserRecoverPassword"
            component={UserRecoverPassword}
            options={{ title: "Recuperar Contraseña" }}
          />

         <Stack.Screen
         name="Account"
         component={Account}
         options={{title: "Cuenta"}}
         />

          <Stack.Screen
            name="HomeMain"
            component={HomeMain}
            options={{
              title: "Prueba",
              headerLeft: () => false,
              headerShown: false
            }}
          />

          <Stack.Screen
            name="RegisterUser"
            component={RegisterUser}
            options={{ title: "Registro" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
