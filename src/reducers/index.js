import { combineReducers } from "redux";
import productRuducer from "./productReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";

const reducer = combineReducers({
    products: productRuducer,
    carts: cartReducer,
    orders: orderReducer
})
 
export default reducer;
