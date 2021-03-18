import React from 'react'
import { connect } from "react-redux"; 
import formatCurrency from "../util";
import { addToCart } from "../actions"
import { Button } from "./Button";
import "./Product.css";

const Product = (props) => {
    const handleCart = () =>{
        props.addToCart(props.product);
    }

    
    return (
        <div className="product">
            <div className="product__image">
                <img src={props.data.productImage} alt={props.data.productName}/>
            </div>
            <p className="product__price">{formatCurrency(props.data.productPrice)}</p>
            <Button buttonStyle="cart" buttonColor="gray" onClick = {handleCart}>Add To Cart</Button>
        </div>        
    )
    

}


export default connect(null, { addToCart })(Product)






