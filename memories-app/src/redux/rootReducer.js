import { combineReducers } from "redux";
import memoryReducer from "./memoryReducer";

const rootReducer = combineReducers({
  memoryReducer,
});

export default rootReducer;
