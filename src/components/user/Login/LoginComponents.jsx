import React from 'react';
import { Image, Text, View } from 'react-native'; // Importa Image, Text y View de 'react-native'
import ImageLogin from '../../../../image/ImageLogin/ImageLogin.png'; 
import styles from "./LoginComponentsStyle"; // Importa los estilos desde el archivo correcto

export const LoginComponents = () => {
  return (
    <View style={styles.container}>
      
      <Image 
        source={ImageLogin}
        style={styles.image}
      />
    </View>
  );
}
