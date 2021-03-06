import * as types from "../types";

const initialState = {  
  loading: false,
  error: null,
  carrinho: [],
  user: null
};

export const CarrinhoReducer = (state = initialState, action) => {  
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
