import { combineReducers } from "redux";
import { genreReducer } from "./genreReducer";
import { postReducer } from "./postReducer";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['post']
}

const reducer = combineReducers({
  genre: genreReducer,
  post: postReducer,
});

export default persistReducer(persistConfig, reducer);



