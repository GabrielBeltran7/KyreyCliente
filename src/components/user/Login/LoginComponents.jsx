import React from "react";
import { Image, TextInput, View, Text } from "react-native"; // Importa Image, Text y View de 'react-native'
import ImageLogin from "../../../../image/ImageLogin/ImageLogin.png";
import styles from "./LoginComponentsStyle"; // Importa los estilos desde el archivo correcto

export const LoginComponents = () => {
  return (
    <View style={styles.container}>
      <Image source={ImageLogin} style={styles.image} />
      <TextInput
        placeholder="Corredo"
        keyboardType="email-address"
        type="email"
      />
      <TextInput placeholder="Password" type="password" />

      <Text>
        ¿Olvidaste tu Contraseña?{"  "}
        <Text>Recuperala</Text>
      </Text>
    </View>
  );
};
