import React from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import ImageLogin from "../../../../image/ImageLogin/ImageLogin.png";
import styles from "./LoginComponentsStyle";
import { useNavigation } from "@react-navigation/native";

export const LoginComponents = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Image source={ImageLogin} style={styles.image} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo"
            keyboardType="email-address"
            name="correo"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            name="password"
          />
        </View>
        <Text style={styles.forgotPasswordText}>
          ¿Olvidaste tu Contraseña?{"  "}
          <Text style={styles.image}>Recupérala</Text>
        </Text>

        {/* Boton para crear cuenta */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbotton}>Iniciar Sesion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RegisterUser")}
        >
          <Text style={styles.textbotton}>Crear Cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
