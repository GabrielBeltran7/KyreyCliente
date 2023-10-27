import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#F25B06",
    minHeight: 1500,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
    color: "#ffe500",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconInputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: "80%",
    height: 50,
    fontSize: 15,
  },
  forgotPasswordText: {
    color: "white",
  },
  button: {
    backgroundColor: "#ffe500",
    margin: 10,
    width: "50%",
    padding: 10,
    borderRadius: 20,
  },
  textbotton: {
    textAlign: "center",
    borderRadius: 10,
  },
  errorText: {
    color: "#f7ea62",
  },
});

export default styles;
