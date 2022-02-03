import { combineReducers } from "@reduxjs/toolkit";
import myListReducer from "./myListSlice";
import originalsReducer from "./originalsSlice";
import trendsReducer from "./trendsSlice";

const rootReducer = combineReducers({
  myList: myListReducer,
  originals: originalsReducer,
  trends: trendsReducer,
});

export default rootReducer;
