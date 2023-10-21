import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6300",
    minHeight: "calc(100vh - 64px)",
  },
  text: {
    color: "#f98f",
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: "90%",
    margin: "20px",
  },
});

export default styles;
