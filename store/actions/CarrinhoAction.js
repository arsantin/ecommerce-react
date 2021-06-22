import * as types from "../types";

export const adicionarAoCarrinho = (item) => async (dispatch) =>{
  console.log("item função", item);
  dispatch({
    type: types.ADICIONA_AO_CARRINHO,
    payload: item
  });
}

