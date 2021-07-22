import * as types from "../types";

const initialState = {  
  loading: false,
  error: null,
  user: null
};

export const UserReducer = (state = initialState, action) => {  
  switch (action.type) {
    case types.GET_USER:
           
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
