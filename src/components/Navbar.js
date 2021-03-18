import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import  { IconButton } from "@material-ui/core";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "./Navbar.css";

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="navbar__link">
                <Link to="/shop" className="navbar__item">Shop</Link>
                <Link to="" className="navbar__item">About</Link>
                <Link to ="" className="navbar__item">Contact</Link>
            </div>
            <div className="navbar__logo">
                <Link to="/"><img src={logo} alt="logo" className="navbar__logo-image"/></Link>
            </div>
            <div className="navbar__shopping">
                <Link to ="" className="navbar__item">Trade</Link>
                <div className="navbar__shopping-cart">
                    <Link to="/checkout"><IconButton>
                        <AddShoppingCartIcon />
                    </IconButton>
                    {props.cart.length!==0&& <span className="cart-icon">{props.cart.length}</span>}
                    </Link>
                </div>
                
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {cart:state.carts}
}
export default connect(mapStateToProps)(Navbar)
