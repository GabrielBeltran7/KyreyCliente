
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image } from 'react-native';
import Constants from 'expo-constants';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import Button from "../BottonCamera/Button"; // Asumo que la ruta está correcta
import styles from './CameraComponentsStyle';
import { useDispatch } from 'react-redux';
import {dispatchImage} from "../../../Redux/Actions"
import { useNavigation } from '@react-navigation/native';


const CameraComponents = () => {
    dispatch = useDispatch()
    const navigation= useNavigation()

    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);
  

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(status === 'granted');
        await MediaLibrary.requestPermissionsAsync();
      })();
    }, []);
   const navigateAcount =()=>{
    navigation.navigate("Account")
   }
    const takePicture = async () => {
      if (cameraRef.current) {
        try {
          const data = await cameraRef.current.takePictureAsync();
          console.log(data);
          setImage(data.uri);
        } catch (error) {
          console.error(error);
        }
      }
    };
  
    const savePicture = async () => {
      if (image) {
        try {
          const asset = await MediaLibrary.createAssetAsync(image);
          
         
          dispatch(dispatchImage(image))  
          navigateAcount()
        } catch (error) {
            alert('No fue posible guardar la imagen!  ❌');
        }
      }
    };
  
    if (hasCameraPermission === false) {
      return <Text>No tiene permiso a la Camara</Text>;
    }
  


  return (
    


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
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
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
            color={
              flash === Camera.Constants.FlashMode.off ? 'gray' : '#fff'
            }
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
            title="Repetir"
            onPress={() => setImage(null)}
            icon="retweet"
          />
          <Button title="Guardar" onPress={savePicture} icon="check" />
        </View>
      ) : (
        <Button title="Tomar Foto" onPress={takePicture} icon="camera" />
      )}
    </View>
  </View>
  )
}

export default CameraComponents
