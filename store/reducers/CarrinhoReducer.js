import * as types from "../types";

const initialState = {  
  loading: false,
  error: null,
  carrinho: []
};

export const CarrinhoReducer = (state = initialState, action) => {  
  console.log("car reducer")
  switch (action.type) {
    case types.ADICIONA_AO_CARRINHO:
      let carrinhoDeCompras = state.carrinho.slice();
      carrinhoDeCompras.push(action.payload)     
      return {
        ...state,
        carrinho: carrinhoDeCompras,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
