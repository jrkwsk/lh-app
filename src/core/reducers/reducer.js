import {
    LOGIN,
    REGISTER,
    LOGINPROCESSING,
    REGISTERING
  } from "./actionTypes.js";
  
  export const reducer = (state = {}, action) => {
    switch (action.type) {
      case LOGIN:
        return { ...state, loggedIn: true };
      case REGISTER:
        return { ...state, registered: true };
      case LOGINPROCESSING:
        return { ...state, loginProcessing: true };
      case REGISTERING:
        return { ...state, registering: true };
      default:
        return state;
    }
  };