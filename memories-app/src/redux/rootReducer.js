import { combineReducers } from "redux";
import memoryReducer from "./memoryReducer";

const rootReducer = combineReducers({
  memories: memoryReducer,
});

export default rootReducer;
