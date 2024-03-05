import { combineReducers } from "redux";
import TranscationReducer from "./TransactionReducer";

const rootReducer = combineReducers({
  Transations: TranscationReducer,
});

export default rootReducer;
