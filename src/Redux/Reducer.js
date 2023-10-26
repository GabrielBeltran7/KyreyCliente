/* eslint-disable no-unused-vars */
/* eslint-disable no-fallthrough */
import {GET_USER_PROFILE, NEW_PHOTO_USER} from "./ActionsTypes"

let inicialState = {
  userdate:[],
  newphotouser:[]
};


const rootReducer = (state = inicialState, action) => {
  switch (action.type) {

    case GET_USER_PROFILE:
      return{
        ...state,
        userdata:action.payload,
      }
      case NEW_PHOTO_USER:
        return{
          ...state,
          newphotouser:action.payload
        }
    default:
      return state;
  }
};

export default rootReducer;



