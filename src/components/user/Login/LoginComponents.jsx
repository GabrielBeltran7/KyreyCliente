

import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Alert
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons"; // Importa los íconos
import ImageLogin from "../../../../image/ImageLogin/ImageLogin.png";
import styles from "./LoginComponentsStyle";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../api/firebase/FirebaseConfig/FirebaseConfig";
import { useNavigation } from "@react-navigation/native";

const LoginComponents = () => {
  const navigation = useNavigation();
  const [emailError, setEmailError] = useState("");

  const [input, setInputs] = useState({
    email: "",
    password: "",
  });
  
  const handleChangeInput = (name, value) => {
    setInputs({
      ...input,
      [name]: value,
    });
  };
  const isEmailValid = (email) => {
    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };
  const HomeMain =()=>{
    navigation.navigate("HomeMain")
  }

  const RecoverPassword = () => {
    navigation.navigate("UserRecoverPassword");
  };

  const handleSignIn = async () => {
    if (!isEmailValid(input.email)) {
      setEmailError("Ingresa un correo electrónico válido");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        input.email,
        input.password
      );
      const user = userCredential.user;
      
      HomeMain();
    } catch (error) {
      Alert.alert("Error", "Por favor revisa el correo o la contraseña", [
        {
          text: "ya",
          style: "default", 
          onPress: () => {
           
          },
        },
      ],
      {
        cancelable: false, // Evita que la alerta se cierre al tocar fuera de ella
        titleStyle: {
          color: "red", // Color del título
        },
        messageStyle: {
          color: "red", // Color del mensaje
        },
        containerStyle: {
          backgroundColor: "red", // Fondo de la alerta
        } }
      
      
      
      
      );
    }
  };

 

 
  return (
    <View style={styles.outerContainer}>
      
      <View style={styles.container}>
        <Image source={ImageLogin} style={styles.image} />
        <View style={styles.inputContainer}>
          <View style={styles.iconInputContainer}>
            <View style={styles.tamaño}>
              <FontAwesomeIcon icon={faEnvelope} style={styles.inputIcon} />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={input.email}
              onChangeText={(text) => handleChangeInput("email", text)}
            />
          </View>
          <Text style={styles.errorText}>
            <Text>{emailError}</Text>
          </Text>
          <View style={styles.iconInputContainer}>
            <View style={styles.tamaño}>
              <FontAwesomeIcon icon={faLock} style={styles.inputIcon} />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={input.password}
              onChangeText={(text) => handleChangeInput("password", text)}
            />
          </View>
        </View>
        <Text onPress={RecoverPassword} style={styles.forgotPasswordText}>
          ¿Olvidaste tu Contraseña?{"  "}
          <Text style={styles.image}>Recupérala</Text>
        </Text>

        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.textbotton}>Iniciar Sesión</Text>
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

export default LoginComponents;
