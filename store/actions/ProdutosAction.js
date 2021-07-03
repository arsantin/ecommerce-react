import * as types from "../types";
import axios from "axios";

export const fetchProdutos = () => async () => {
getServerSideProps = () => async (dispatch) => { 

  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=1cafedf2a856620e3b3fa86798661fe8&page=1"
  );

  console.log("res", res)
  
  dispatch({
    type: types.GET_POSTS,
    payload: res.data,
  });
    return {
      props: {
        teste: res.data
      }, // will be passed to the page component as props
    }
  }
} 


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

export const atualizaProduto = (data) => async (dispatch) =>{
  
  
  console.log("obj", data);
  dispatch({
    type: types.ATUALIZA_PRODUTO,
    payload: {id: data.id, title: data.title}
  });
}

