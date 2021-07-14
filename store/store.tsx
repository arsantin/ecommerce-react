import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";



const initialState = {
  
};
const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(()=>{
  console.log("state changed");
})
export const persistor = persistStore(store);


export default { store, persistor };

export type RootState = ReturnType<typeof store.getState>