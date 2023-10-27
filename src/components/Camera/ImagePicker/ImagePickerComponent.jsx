import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { dispatchImagePicker } from '../../../Redux/Actions';


const ImagePickerComponent = () => {

    const [image, setImage] = useState(null);

    console.log("9999999999999999999999999999999999", image)

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
  
useEffect(()=>{
    dispatch(dispatchImagePicker(image))
},[image])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Click para Seleccionar Image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  
  );
};

export default ImagePickerComponent;

// import React, { useState, useEffect } from 'react';
// import { Button, Image, View, Platform } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { dispatchImagePicker } from '../../../Redux/Actions';


// const ImagePickerComponent = () => {

//     const [image, setImage] = useState(null);

//     console.log("9999999999999999999999999999999999", image)

//     const pickImage = async () => {
//       // No permissions request is necessary for launching the image library
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,
//       });
  
//       console.log(result);
  
//       if (!result.canceled) {
//         setImage(result.assets[0].uri);
//       }
//     };
  
// useEffect(()=>{
//     dispatch(dispatchImagePicker(image))
// },[image])

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Click para Seleccionar Image" onPress={pickImage} />
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//     </View>
  
//   );
// };

// export default ImagePickerComponent;

