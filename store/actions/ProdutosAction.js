import * as types from "../types";
import axios from "axios";

export const fetchProdutos = (comercio) => async (dispatch) => {  
  
  dispatch({
    type: types.GET_POSTS,
    payload: comercio,
  });
   
  }
 


export const fetchpostdetails = (id) => async (dispatch) => {
  const idMovie = id.id;
  
  
  dispatch({
    type: types.GET_POSTS_DETAILS,
    payload: idMovie,
  });
};

export const enviaParaCategoriasFiltradas = (id, name) => async (dispatch) => {  
  const obj= {
    id: id,
    name: name
  }
  
  dispatch({
    type: types.FILTERED_LIST,
    payload: obj,
  });  
};

export const removeCategoriaFiltrada = (id, name) => async (dispatch) => {  
  const obj= {
    id: id,
    name: name
  }  
  dispatch({
    type: types.FILTERED_LIST_REMOVE,
    payload: obj,
  });  
};

export const resetaFiltros = () => async (dispatch) => {
  dispatch({
    type: types.CLEAN_FILTER
  });  
};

export const adicionarAoCarrinho = (item) => async (dispatch) =>{
  console.log("item função", item);
  dispatch({
    type: types.ADICIONA_AO_CARRINHO,
    payload: item
  });
}

export const atualizaProduto = (data) => async (dispatch) =>{
  
  
  console.log("obj", data);
  dispatch({
    type: types.ATUALIZA_PRODUTO,
    payload: {id: data.id, title: data.title}
  });
}

