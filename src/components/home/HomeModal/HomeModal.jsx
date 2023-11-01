
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
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../../api/firebase/FirebaseConfig/FirebaseConfig";

const HomeModal = () => {
  const navigation = useNavigation()
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
      setMenuVisible(!isMenuVisible);
    };
    const deslogueo = ()=>{
      auth.signOut()
      navigation.navigate("LoginUser")
       };

const navegateAccount =()=>{
  navigation.navigate("Account");
}

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Icon name="bars" size={24} color="#000" />
        </TouchableOpacity>
        <ModalMenu isVisible={isMenuVisible}>
        <View style={styles.menuContent}>
          <Text onPress={navegateAccount}>Cuenta</Text>
          <Text>Historial de Ordenes</Text>
          <Text>Historial de Delivery</Text>
          <Text>Agregar Orden</Text>
          <TouchableOpacity onPress={toggleMenu}>
            <Text>menu</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={deslogueo}>
            <Text>Desloguearse</Text>
          </TouchableOpacity>
        </View>
      </ModalMenu>
    </View>
  );
}



  
  export default HomeModal;