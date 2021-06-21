import { combineReducers } from "redux";
import { CategoriaReducer } from "./CategoriaReducer";
import { ProdutoReducer } from "./ProdutoReducer";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['produto']
}

const reducer = combineReducers({
  categoria: CategoriaReducer,
  produto: ProdutoReducer,
});

export default persistReducer(persistConfig, reducer);



