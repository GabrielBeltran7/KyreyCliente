import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../../Redux/Actions';
import { auth } from '../../../../api/firebase/FirebaseConfig/FirebaseConfig';
import Constants from 'expo-constants';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '../../Camera/BottonCamera/Button';

import styles from './AcocountComponentsStyle'; 



const AccountComponent = () => {


  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);




  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        alert('Picture saved! 🎉');
        setImage(null);
        console.log('saved successfully');
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }






  const dispatch = useDispatch();

  const userdata = useSelector((state) => state.userdata);

  const dateUser = auth.currentUser;
  const userEmail = dateUser ? dateUser.email : '';


 

  const [input, setInput] = React.useState({
    email: userdata.email,
    phone: userdata.phone,
    name: userdata.name,
    photo: userdata.photo,
    ruc: userdata.ruc,
    password: '',
  });
  const handleChangeInput = (name, value) => {
    setInput({
      ...input,
      [name]: value,
    });
  };
  useEffect(() => {
    dispatch(getUserProfile(userEmail));
  }, [dispatch, userEmail]);
  return (
    <View>
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
          placeholder="Correo"
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

<View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          ref={cameraRef}
          flashMode={flash}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
            }}
          >
            <Button
              title=""
              icon="retweet"
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            />
            <Button
              onPress={() =>
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                )
              }
              icon="flash"
              color={flash === Camera.Constants.FlashMode.off ? 'gray' : '#fff'}
            />
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}

      <View style={styles.controls}>
        {image ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 50,
            }}
          >
            <Button
              title="Re-take"
              onPress={() => setImage(null)}
              icon="retweet"
            />
            <Button title="Save" onPress={savePicture} icon="check" />
          </View>
        ) : (
          <Button title="Take a picture" onPress={takePicture} icon="camera" />
        )}
      </View>
    </View>




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




