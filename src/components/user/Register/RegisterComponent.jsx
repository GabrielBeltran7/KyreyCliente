import { Image, TextInput, View, Text, Button } from "react-native";
import style from "./RegisterComponentStyle";
import ImageLogin from "../../../../image/ImageLogin/ImageLogin.png";
import { useState } from "react";

export const RegisterComponent = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    telefono: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <View style={style.container}>
      <Image source={ImageLogin} style={style.image} />
      <TextInput
        onChangeText={handleChange}
        placeholder="Nombre"
        
        style={style.input}
      />
      <TextInput
        name="email"
        placeholder="Correo"
        keyboardType="email-address"
        
        style={style.input}
        onChangeText={handleChange}
      />
      <TextInput
        name="telefono"
        onChangeText={handleChange}
        placeholder="Teléfono"
        
        style={style.input}
      />
      <TextInput
        name="password"
        placeholder="Password"
        
        style={style.input}
        onChangeText={handleChange}
      />
      <TextInput
        placeholder="Confirmar Password"
        
        style={style.input}
      />
      <Button title="Crear Cuenta" />
    </View>
  );
};
