import * as types from "../types";
import axios from 'axios'

export const listaCategorias = () => async (dispatch) => { 
  const res = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=1cafedf2a856620e3b3fa86798661fe8"
  );
  dispatch({
    type: types.GET_GENRE_LIST,
    payload: res.data,
  });
};
