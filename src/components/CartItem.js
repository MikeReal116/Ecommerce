import React from 'react';
import { connect } from "react-redux";
import "./CartItem.css";
import formatCurrency from "../util";
import { Button } from "./Button"
import { removeFromCart } from "../actions";

const CartItem = ( props) => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src={props.data.productImage} alt={props.data.productName}/>
            </div>
            <div className="cartitem__detail">
                <p className="cartitem__name">{props.data.productName}</p>
                <p className="cartitem__price">{`${formatCurrency(props.data.productPrice)}  x  ${props.count}`}</p>
                <Button buttonStyle="outline" buttonColor="black" onClick={()=>props.removeFromCart(props.product)} >Remove</Button>
            </div>
            
        </div>
    )
}

export default connect(null, { removeFromCart })(CartItem)
