import { Provider } from 'react-redux';
import { store } from './src/Redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginUser} from "./src/screens/users/Login/LoginUser"
import {UserRecoverPassword} from "./src/screens/users/UserRecoverPassword/UserRecoverPassword"

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    <Provider store={store}> {/* Envuelve tu aplicación con el Provider */}
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginUser">
        <Stack.Screen name="LoginUser" component={LoginUser} options={{ title: "Inicio de Sesion" }} />
        <Stack.Screen name="UserRecoverPassword" component={UserRecoverPassword} options={{ title: "Recuperar Contraseña" }} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  );
}


