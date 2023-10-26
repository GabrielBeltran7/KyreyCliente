
import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Text, Image, Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../../Redux/Actions';
import { auth } from '../../../../api/firebase/FirebaseConfig/FirebaseConfig';
import Constants from 'expo-constants';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import Button from "../BottonCamera/Button"; // Asumo que la ruta está correcta

const CameraComponents = () => {


    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);
  
  
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(status === 'granted');
        await MediaLibrary.requestPermissionsAsync();
      })();
    }, []);
  
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
          alert('Picture saved! 🎉');
          setImage(null);
          console.log('saved successfully');
        } catch (error) {
          console.error(error);
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
            title="Re-take"
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
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#000',
      padding: 8,
    },
    controls: {
      flex: 0.5,
    },
    button: {
      height: 40,
      borderRadius: 6,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#E9730F',
      marginLeft: 10,
    },
    camera: {
      flex: 5,
      borderRadius: 20,
    },
    topControls: {
      flex: 1,
    },
  });