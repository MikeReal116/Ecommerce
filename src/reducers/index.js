import { combineReducers } from "redux";
import productRuducer from "./productReducer";

const reducer = combineReducers({
    products: productRuducer
})
 
export default reducer;
