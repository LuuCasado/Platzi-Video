import { combineReducers } from "@reduxjs/toolkit";
import myListReducer from "./myListSlice";
import originalsReducer from "./originalsSlice";
import trendsReducer from "./trendsSlice";
import authReducer from "./authSlice";
import playerReducer from "./playerSlice";
import searchReducer from "./searchSlice";

const rootReducer = combineReducers({
  myList: myListReducer,
  originals: originalsReducer,
  trends: trendsReducer,
  player: playerReducer,
  auth: authReducer,
  search: searchReducer,
});

export default rootReducer;
