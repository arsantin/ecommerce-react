import * as types from "../types";
import axios from "axios";


export const fetchProdutos = () => async (dispatch) => { 

  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=1cafedf2a856620e3b3fa86798661fe8&page=1"
  );
  
  dispatch({
    type: types.GET_POSTS,
    payload: res.data,
  });
};

export const fetchpostdetails = (id) => async (dispatch) => {
  const idMovie = id.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${idMovie}?api_key=1cafedf2a856620e3b3fa86798661fe8`
  );
  const show = await res.json();
  
  dispatch({
    type: types.GET_POSTS_DETAILS,
    payload: show,
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

export const atualizaProduto = (dados) => async (dispatch) =>{
  console.log("item função", dados);
  dispatch({
    type: types.ATUALIZA_PRODUTO,
    payload: dados
  });
}

