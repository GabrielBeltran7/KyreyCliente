/* eslint-disable no-unused-vars */
/* eslint-disable no-fallthrough */
import {GET_USER_PROFILE} from "./ActionsTypes"

let inicialState = {
  userdate:[]
};


const rootReducer = (state = inicialState, action) => {
  switch (action.type) {

    case GET_USER_PROFILE:
      return{
        ...state,
        userdata:action.payload,
      }
    default:
      return state;
  }
};

export default rootReducer;



