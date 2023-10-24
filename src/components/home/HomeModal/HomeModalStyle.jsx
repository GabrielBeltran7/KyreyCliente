import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    menuButton: {
      position: "absolute",
      top: 10,
      left: 10,
      zIndex: 1,
    },
    menuContent: {
      backgroundColor: "#fff",
      padding: 20,
    },
  });
  export default styles;