/* eslint-disable no-unused-vars */
import { GET_SERVICIOS } from "./ActionsTypes";
import servicios from "./Servicios";

export const getServicios = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_SERVICIOS,
        payload: servicios,
      });
    } catch (error) {
      throw error;
    }
  };
};
