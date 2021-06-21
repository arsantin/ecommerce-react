import * as types from "../types";

const initialState = {
  categorias: [],
  categoria: {},
  loading: false,
  error: null,
};

export const CategoriaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PEGA_LISTA_CATEGORIAS:
      return {
        categorias: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
