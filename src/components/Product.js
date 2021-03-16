import React from 'react'
import formatCurrency from "../util";
import { Button } from "./Button";
import "./Product.css";

const Product = ({data:{ productImage, productName, productPrice}}) => {

    
    return (
        <div className="product">
            <div className="product__image">
                <img src={productImage} alt={productName}/>
            </div>
            <p className="product__price">{formatCurrency(productPrice)}</p>
            <Button buttonStyle="cart" buttonColor="gray">Add To Cart</Button>
        </div>        
    )
    

}

export default Product






