import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#F25B06", // Fondo naranja que cubre toda la pantalla
    minHeight: "calc(100vh - 64px)"

  },
  container: {
    flex: 1,
     // Cambia el color de fondo según tus preferencias
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  },
  image: {
   borderRadius:15,
    width: 150, // Ajusta el tamaño de la imagen
    height: 150, // Ajusta el tamaño de la imagen
    marginBottom: 20, // Espacio entre la imagen y los campos de entrada
  },
  inputContainer: {
    width: "80%", // Ajusta el ancho del contenedor de entrada
    marginBottom: 15, // Espacio entre contenedores de entrada
  },
  input: {
    width: "100%",
    backgroundColor:"white",
    height: 50, // Altura de los campos de entrada
    borderWidth: 1, // Borde para los campos de entrada
    borderColor: "#ccc", // Color del borde
    borderRadius: 5, // Radio de borde
    paddingHorizontal: 10, // Relleno horizontal
    marginBottom: 10, // Espacio entre campos de entrada
  },
  forgotPasswordText: {
    padding:10,
    color:"white", // Color del texto
    fontSize:15
  },
  button:{
    color: "#007PHF",
    backgroundColor:"black",
    padding: 15,
    width: "80%",
    borderRadius: 5,
    paddingHorizontal: 10, 
    marginBottom: 10
  },
  textbotton:{
    color:"white",
    fontSize:20,
    
  },iconInputContainer:{
    flexDirection: 'row', // Para colocar los componentes en fila
    alignItems: 'center', // Alinea verticalmente los componentes
  },
    inputIcon: {
      marginRight:0,
      color:"black", // Espacio entre el ícono y el campo de entrada
      backgroundColor:"white",
      height: 20,
      width:20,
      alignItems:"center"
    },tamaño:{
      marginRight:0,
      color:"black", // Espacio entre el ícono y el campo de entrada
      backgroundColor:"white",
      height: 50,
      width:25,
      alignItems:"center"
    },errorText:{
      color:"white",
      alignContent:"center"
    }
});

export default styles;
