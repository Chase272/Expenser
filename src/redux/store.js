import { thunk } from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import TranscationReducer from "./TransactionReducer";
import { composeWithDevTools } from "@redux-devtools/extension";




const store = createStore(
  TranscationReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
