import { combineReducers } from "redux";
import { Reducer } from "./reducer";


const rootReducers = combineReducers({
  // auth: AuthReducer,
  data: Reducer,
});

export default rootReducers;
