const orderReducer = (state={}, action) =>{
    switch(action.type){
        case  "FETCH_ORDERS":
            return {orders:action.payload}
        case "CREATE_ORDER":
            return {order:action.payload};
        case "CLEAR_ORDER":
            return{order:null};
            default:
             return state
    }
}

export default orderReducer;