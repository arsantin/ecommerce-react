import * as types from "../types";

const initialState = {
  movie: {},
  filteredList: [],
  chosenIds: [],
  novoarray: [],
  filtered: [],
  postdetails: [],
  posts: [],
  post: {},
  loading: false,
  error: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
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
        state.filteredList.findIndex((i) => i.id === action.payload.id) > -1;

      let filteredList = state.filteredList.slice();

      if (idAlreadyExists) {
        filteredList = filteredList.filter((obj) => obj != action.payload.id);
      } else {
        const ok = filteredList.push(action.payload);
      }

      return {
        ...state,
        filteredList: filteredList,
        loading: false,
        error: null,
      };
    case types.FILTERED_LIST_REMOVE:
      let idExists =
        state.filteredList.findIndex((i) => i.id === action.payload.id) > -1;
      let filteredL = state.filteredList.slice();

      if (idExists) {
        const filteredIndex = filteredL.findIndex(
          (i) => i.id === action.payload.id
        );

        filteredL.splice(filteredIndex, 1);
      }

      return {
        ...state,
        filteredList: filteredL,
        loading: false,
        error: null,
      };
    case types.CLEAN_FILTER:
      return {
        ...state,
        filteredList: [],
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
