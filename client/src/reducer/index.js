import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import itemReducer from "./itemReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import msgReducer from "./msgReducer";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
   //Start storing everything at root
  key: "root",
  storage,
  whitelist: ["cart", "auth"],
};

const rootReducer = combineReducers({
  item: itemReducer,
  cart: cartReducer,
  auth: authReducer,
  msg: msgReducer,
});

export default persistReducer(persistConfig, rootReducer);