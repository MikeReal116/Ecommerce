import db from "../firebase";

export const fetchProducts = () => dispatch => {
    db.collection("products").onSnapshot(snapshot => {
       const response = snapshot.docs.map(doc => ({id:doc.id, data:doc.data()}));
       dispatch({type:"FETCH_PRODUCTS", payload:response});
    })
}