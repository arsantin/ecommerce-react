import * as types from "../types";
import axios from "axios";

export const fetchUserLogin = (session) => async (dispatch) => {  
  console.log("user", session)
  dispatch({
    type: types.GET_USER,
    payload: session,
  });
   
  }