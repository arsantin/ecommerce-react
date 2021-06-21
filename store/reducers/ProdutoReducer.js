import * as types from "../types";

const initialState = {
  movie: {},
  listaDeProdutosFiltrados: [],
  chosenIds: [],
  novoarray: [],
  filtered: [],
  postdetails: [],
  produtos: [],
  produto: {},
  loading: false,
  error: null,
};

export const ProdutoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        produtos: action.payload,
        loading: false,
        error: null,
      };
    case types.GET_POSTS_DETAILS:
      return {
        ...state,
        postdetails: action.payload,
        loading: false,
        error: null,
      };
    case types.FILTERED_LIST:
      let idAlreadyExists =
        state.listaDeProdutosFiltrados.findIndex((i) => i.id === action.payload.id) > -1;

      let listaDeProdutosFiltrados = state.listaDeProdutosFiltrados.slice();

      if (idAlreadyExists) {
        listaDeProdutosFiltrados = listaDeProdutosFiltrados.filter((obj) => obj != action.payload.id);
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
        state.listaDeProdutosFiltrados.findIndex((i) => i.id === action.payload.id) > -1;
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
    default:
      return state;
  }
};