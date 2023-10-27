import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Text, Image, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../../Redux/Actions';
import { auth } from '../../../../api/firebase/FirebaseConfig/FirebaseConfig';
import Constants from 'expo-constants';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useNavigation } from "@react-navigation/native";

import styles from "./AcocountComponentsStyle";

const AccountComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.userdata);
  const dateUser = auth.currentUser;
  const userEmail = dateUser ? dateUser.email : '';

  const [input, setInput] = useState({
    email: userdata.email,
    phone: userdata.phone,
    name: userdata.name,
    photo: userdata.photo,
    ruc: userdata.ruc,
    password: '',
  });

  const navigateCamera = () => {
    navigation.navigate("CameraComponents");
  }

  const handleChangeInput = (name, value) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(getUserProfile(userEmail));
  }, [dispatch, userEmail]);

  const takePictureButton = (
    <TouchableOpacity onPress={navigateCamera} style={styles.cameraButton}>
      <Icon name="camera" size={50} color="white" />
    </TouchableOpacity>
  );

  return (
    <View>
      {takePictureButton}

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={input.name}
          onChangeText={(text) => handleChangeInput('name', text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Ruc"
          value={input.ruc}
          onChangeText={(text) => handleChangeInput('ruc', text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={input.email}
          keyboardType="email-address"
          onChangeText={(text) => handleChangeInput('email', text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Foto"
          value={input.photo}
          onChangeText={(text) => handleChangeInput('photo', text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="blue" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={input.phone.toString()}
          onChangeText={(text) => handleChangeInput('phone', text)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={input.password}
          onChangeText={(text) => handleChangeInput('password', text)}
        />
      </View>
    </View>
  );
};

export default AccountComponent;



// import React, { useState, useEffect, useRef } from 'react';
// import { View, TextInput, Text, Image, Platform, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserProfile } from '../../../Redux/Actions';
// import { auth } from '../../../../api/firebase/FirebaseConfig/FirebaseConfig';
// import Constants from 'expo-constants';
// import { Camera } from 'expo-camera';
// import * as MediaLibrary from 'expo-media-library';
// import { useNavigation } from "@react-navigation/native";

// import styles from "./AcocountComponentsStyle";



// const AccountComponent = () => {

//   const navigation = useNavigation()
//   const dispatch = useDispatch();

//   const userdata = useSelector((state) => state.userdata);

//   const dateUser = auth.currentUser;
//   const userEmail = dateUser ? dateUser.email : '';

//   const [input, setInput] = useState({
//     email: userdata.email,
//     phone: userdata.phone,
//     name: userdata.name,
//     photo: userdata.photo,
//     ruc: userdata.ruc,
//     password: '',
//   });
// const navigateCamera = ()=>{
//   navigation.navigate("CameraComponents")
// }
//   const handleChangeInput = (name, value) => {
//     setInput({
//       ...input,
//       [name]: value,
//     });
//   };

//   useEffect(() => {
//     dispatch(getUserProfile(userEmail));
//   }, [dispatch, userEmail]);

//   return (
//     <View>
//       <TouchableOpacity onPress={navigateCamera}>
//         <Text>Tomar Foto</Text>
//       </TouchableOpacity>

//       <View style={styles.inputContainer}>
//         <Icon name="user" size={20} color="black" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Nombre"
//           value={input.name}
//           onChangeText={(text) => handleChangeInput('name', text)}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Icon name="user" size={20} color="black" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Ruc"
//           value={input.ruc}
//           onChangeText={(text) => handleChangeInput('ruc', text)}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Icon name="envelope" size={20} color="black" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Correo"
//           value={input.email}
//           keyboardType="email-address"
//           onChangeText={(text) => handleChangeInput('email', text)}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Icon name="user" size={20} color="black" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Foto"
//           value={input.photo}
//           onChangeText={(text) => handleChangeInput('photo', text)}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Icon name="phone" size={20} color="blue" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Teléfono"
//           value={input.phone.toString()}
//           onChangeText={(text) => handleChangeInput('phone', text)}
//           keyboardType="numeric"
//         />
//       </View>



//       <View style={styles.inputContainer}>
//         <Icon name="lock" size={20} color="black" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry={true}
//           value={input.password}
//           onChangeText={(text) => handleChangeInput('password', text)}
//         />
//       </View>
//     </View>
//   );
// };

// export default AccountComponent;


