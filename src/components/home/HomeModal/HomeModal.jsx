
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ModalMenu from "react-native-modal";
import styles from "./HomeModalStyle";


const HomeModal = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
      setMenuVisible(!isMenuVisible);
    };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Icon name="bars" size={24} color="#000" />
      </TouchableOpacity>
      <ModalMenu isVisible={isMenuVisible}>
        <View style={styles.menuContent}>
          <Text>Cuenta</Text>
          <Text>Historial de Ordenes</Text>
          <Text>Historial de Delivery</Text>
          <Text>Agregar Orden</Text>
          
          <TouchableOpacity onPress={toggleMenu}>
            <Text>Salir</Text>
          </TouchableOpacity>
        </View>
      </ModalMenu>
    </View>
  );
}



  
  export default HomeModal;