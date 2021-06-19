import * as types from "../types";

const initialState = {
  genres: [],
  genre: {},
  loading: false,
  error: null,
};

export const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_GENRE_LIST:
      return {
        genres: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
