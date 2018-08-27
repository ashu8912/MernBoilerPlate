import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";

export default ()=>{
return combineReducers({'sampleReducer':sampleReducer});
}