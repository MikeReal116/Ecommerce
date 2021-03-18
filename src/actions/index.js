import db from "../firebase";

export const fetchProducts = () => dispatch => {
    db.collection("products").onSnapshot(snapshot => {
       const response = snapshot.docs.map(doc => ({id:doc.id, data:doc.data()}));
       dispatch({type:"FETCH_PRODUCTS", payload:response});
    })
}

export const addToCart = (product) => (dispatch, getState) => {
    const cartItem = getState().carts.slice();
    let alreadyExist = false;

    cartItem.forEach(item =>{
        if(item.id===product.id){
            alreadyExist = true;
            item.count++;
        }
    });
    if(!alreadyExist){
        cartItem.push({...product, count:1})
    }
    dispatch({type:"ADD_TO_CART", payload: {cartItem}});
}

export const removeFromCart = (product) => (dispatch,getState) => {
    const cartItem = getState().carts.slice().filter(item => item.id !==product.id)
    dispatch({type:"REMOVE_FROM_CART", payload:cartItem})
}

export const createOrder = (order) => dispatch => {
    db.collection("orders").add(order);
    dispatch({type:"CREATE_ORDER" , payload: order});
}

export const clearCart = () => (dispatch) =>{
    dispatch({type:"CLEAR_CART"})
}

export const clearOrder = () => dispatch =>{
    dispatch({type:"CLEAR_ORDER"});
}
