import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginUser} from "./src/screens/users/Login/LoginUser"
import {UserRecoverPassword} from "./src/screens/users/UserRecoverPassword/UserRecoverPassword"

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
      <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginUser">
      <Stack.Screen name="LoginUser" component={LoginUser}  options={{ title: "Inicio de Sesion" }} /> 
      <Stack.Screen name="UserRecoverPassword" component={UserRecoverPassword}  options={{ title: "Recuperar Contraseña" }} /> 
      </Stack.Navigator>
      </NavigationContainer>
  );
}


