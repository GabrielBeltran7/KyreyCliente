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
        onChange={handleChange}
        placeholder="Nombre"
        type="text"
        style={style.input}
      />
      <TextInput
        name="email"
        placeholder="Correo"
        keyboardType="email-address"
        type="email"
        style={style.input}
        onChange={handleChange}
      />
      <TextInput
        name="telefono"
        onChange={handleChange}
        placeholder="Teléfono"
        type="number"
        style={style.input}
      />
      <TextInput
        name="password"
        placeholder="Password"
        type="password"
        style={style.input}
        onChange={handleChange}
      />
      <TextInput
        placeholder="Confirmar Password"
        type="password"
        style={style.input}
      />
      <Button title="Crear Cuenta" />
    </View>
  );
};
