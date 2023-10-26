/* eslint-disable no-unused-vars */
import { GET_USER_PROFILE } from "./ActionsTypes"

import { getFirestore, collection, where,getDocs, query } from "firebase/firestore";

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
