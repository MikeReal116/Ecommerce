import { combineReducers } from "redux";
import productRuducer from "./productReducer";
import cartReducer from "./cartReducer";

const reducer = combineReducers({
    products: productRuducer,
    carts: cartReducer
})
 
export default reducer;
