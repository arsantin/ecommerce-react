import * as types from "../types";
import axios from "axios";


export const fetchmovies = () => async (dispatch) => { 

  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=1cafedf2a856620e3b3fa86798661fe8&page=1"
  );
  
  const  perPage = 4;
  const contagem = await res.data.length

 

  const featMovie = await 

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

export const sendToFiltered = (id, name) => async (dispatch) => {  
  const obj= {
    id: id,
    name: name
  }
  
  dispatch({
    type: types.FILTERED_LIST,
    payload: obj,
  });  
};

export const removeFromFiltered = (id, name) => async (dispatch) => {  
  const obj= {
    id: id,
    name: name
  }
 
  
  dispatch({
    type: types.FILTERED_LIST_REMOVE,
    payload: obj,
  });
  
};

export const cleanFilters = () => async (dispatch) => {
  dispatch({
    type: types.CLEAN_FILTER
  });
  
};

