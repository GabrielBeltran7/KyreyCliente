/* eslint-disable no-unused-vars */

import { GET_USER_PROFILE, NEW_PHOTO_USER,  NEW_PHOTO_PICKER,UPDATE_USER_PROFILE} from "./ActionsTypes"

import {
  getFirestore,
  collection,
  where,
  getDocs,
  query,
  addDoc,
  updateDoc
} from "firebase/firestore";

export const getUserProfile = (email) => {
  return async (dispatch) => {
    try {
      const firestore = getFirestore();
      const customersCollection = collection(firestore, "customers");
      const q = query(customersCollection, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        dispatch({ type: GET_USER_PROFILE, payload: userData });
      } else {
        console.log("No se encontraron resultados para el correo electrónico");
      }
    } catch (error) {
      console.error(error);
    }
  };
};


export const updateUserDate = ( input) => {
  console.log("66666666666666666666666666666666666a", input)
  return async (dispatch) => {
    try {
      const firestore = getFirestore();
      const customersCollection = collection(firestore, "customers");
      const q = query(customersCollection, where("email", "==", input.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref;

        // Combina el objeto `updatedData` con el estado `input`
        const updatedUserData = {  ...input };

        await updateDoc(docRef, updatedUserData);

        // Actualiza el estado de Redux si es necesario
         dispatch({
          type:UPDATE_USER_PROFILE,
          payload:updatedUserData
         });

      } else {
        console.log("No se encontraron resultados para el correo electrónico");
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const dispatchImagePicker = (image) => {
  return async (dispatch) =>{
    dispatch({
      type: NEW_PHOTO_PICKER,
      payload: image
    })
  }
}



export  const dispatchImage =(newphoto) =>{
  return async (dispatch) =>{
    dispatch({
      type: NEW_PHOTO_USER,
      payload: newphoto
    })
  }

}

export const postUser = (user) => {
  console.log(user);
  return async (dispatch) => {
    try {
      const firestore = getFirestore();
      const customersCollection = collection(firestore, "customers");
      await addDoc(customersCollection, user);
    } catch (error) {
      console.error(error);
    }
  };
};

