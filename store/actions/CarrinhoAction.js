import * as types from "../types";

export const adicionarAoCarrinho = (item) => async (dispatch) =>{

  dispatch({
    type: types.ADICIONA_AO_CARRINHO,
    payload: item
  });
}

