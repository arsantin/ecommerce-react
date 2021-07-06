import { combineReducers } from "redux";
import { CategoriaReducer } from "./CategoriaReducer";
import { CarrinhoReducer } from "./CarrinhoReducer";
import { ProdutoReducer } from "./ProdutoReducer";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['carrinho']
}

const reducer = combineReducers({
  categoria: CategoriaReducer,
  produto: ProdutoReducer,
  carrinho: CarrinhoReducer
});

export default persistReducer(persistConfig, reducer);



