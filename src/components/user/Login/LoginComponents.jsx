import React, { useState } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos
import ImageLogin from '../../../../image/ImageLogin/ImageLogin.png';
import styles from './LoginComponentsStyle';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../../../api/firebase/FirebaseConfig/FirebaseConfig";
import { useNavigation } from '@react-navigation/native';



export const LoginComponents = () => {
  const navigation = useNavigation();
  const [emailError, setEmailError] = useState("");
  const [input, setInputs] = useState({
    email: "",
    password: ""
  });

  const handleChangeInput = (name, value) => {
    setInputs({
      ...input,
      [name]: value
    });
  };
  const isEmailValid = (email) => {
    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };


  const handleSignIn = async () => {
    if (!isEmailValid(input.email)) {
      setEmailError("Ingresa un correo electrónico válido");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, input.email, input.password);
      const user = userCredential.user;
      console.log(user);
      // Realiza acciones adicionales después de iniciar sesión, si es necesario
    } catch (error) {
        console.log(error.firebase)
   alert(error);
  
    }
  };

const RecoverPassword = ()=>{
  navigation.navigate('UserRecoverPassword')
}

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
              onChangeText={(text) => handleChangeInput('email', text)}
            />
               
          </View>
          <Text style={styles.errorText}>{emailError}</Text>
          <View style={styles.iconInputContainer}>
            <View style={styles.tamaño}>
              <FontAwesomeIcon icon={faLock} style={styles.inputIcon} />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={input.password}
              onChangeText={(text) => handleChangeInput('password', text)}
            />
          </View>
        </View>
        <Text onPress={RecoverPassword} style={styles.forgotPasswordText}>
          ¿Olvidaste tu Contraseña?{'  '}
          <Text style={styles.image}>Recupérala</Text>
        </Text>

       
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.textbotton}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbotton}>Crear Cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
