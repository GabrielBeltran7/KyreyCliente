import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ImageLogin from "../../../../image/ImageLogin/ImageLogin.png";
import styles from "./UserRecoverPasswordComponentsStyle";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../../api/firebase/FirebaseConfig/FirebaseConfig";

export const UserRecoverPasswordComponents = () => {
  const [input, setInputs] = useState({
    email: "",
  });

  const [emailError, setEmailError] = useState("");

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

  const handlePasswordRecover = async () => {
    setEmailError(""); // Restablecer el mensaje de error

    if (!isEmailValid(input.email)) {
      setEmailError("Ingresa un correo electrónico válido");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, input.email);
       alert("Correo  enviado con éxito.");
    } catch (error) {
       alert("Error al enviar el correo, revisalo que este bien: ");
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
          <Text style={styles.errorText}>{emailError}</Text>
        </View>
        <TouchableOpacity onPress={handlePasswordRecover} style={styles.button}>
          <Text style={styles.textbotton}>Recuperar Contraseña</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
