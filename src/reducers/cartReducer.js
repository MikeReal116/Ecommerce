const cartReducer = (state=[], action) =>{
    switch(action.type){
        case "ADD_TO_CART":
            return action.payload.cartItem;
        case "REMOVE_FROM_CART":
            return action.payload;
        default:
            return state;
    }
}

export default cartReducer;