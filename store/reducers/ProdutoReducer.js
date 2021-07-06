import { HYDRATE } from "next-redux-wrapper";
import * as types from "../types";

const initialState = {
  movie: {},
  listaDeProdutosFiltrados: [],
  postdetails: {},
  produtos: [],
  produto: {},
  loading: false,
  error: null,
};

export const ProdutoReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.settings };
    case types.GET_POSTS:
      return {
        ...state,
        produtos: action.payload,
        loading: false,
        error: null,
      };
    case types.GET_POSTS_DETAILS:    
      const estado = state.produtos  
      const filtro = estado.filter((cada)=> cada._id == action.payload);
      
      return {
        ...state,
        postdetails: filtro,
        loading: false,
        error: null,
      };
    case types.FILTERED_LIST:
      let idAlreadyExists =
        state.listaDeProdutosFiltrados.findIndex(
          (i) => i.id === action.payload.id
        ) > -1;

      let listaDeProdutosFiltrados = state.listaDeProdutosFiltrados.slice();

      if (idAlreadyExists) {
        listaDeProdutosFiltrados = listaDeProdutosFiltrados.filter(
          (obj) => obj != action.payload.id
        );
      } else {
        const ok = listaDeProdutosFiltrados.push(action.payload);
      }

      return {
        ...state,
        listaDeProdutosFiltrados: listaDeProdutosFiltrados,
        loading: false,
        error: null,
      };
    case types.FILTERED_LIST_REMOVE:
      let idExists =
        state.listaDeProdutosFiltrados.findIndex(
          (i) => i.id === action.payload.id
        ) > -1;
      let filteredL = state.listaDeProdutosFiltrados.slice();

      if (idExists) {
        const filteredIndex = filteredL.findIndex(
          (i) => i.id === action.payload.id
        );

        filteredL.splice(filteredIndex, 1);
      }

      return {
        ...state,
        listaDeProdutosFiltrados: filteredL,
        loading: false,
        error: null,
      };
    case types.CLEAN_FILTER:
      return {
        ...state,
        listaDeProdutosFiltrados: [],
        loading: false,
        error: null,
      };
    case types.ATUALIZA_PRODUTO:   
      const obj = action.payload;
      return {
        ...state,
        produtos: {results:[...state.results, action.payload]},        
        loading: false,
        error: null,
      };      
    default:
      return state;
  }
};
