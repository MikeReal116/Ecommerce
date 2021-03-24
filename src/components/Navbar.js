import React, { useState } from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'; 
import  { IconButton } from "@material-ui/core";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "./Navbar.css";

const Navbar = (props) => {
    const [click, setClick] = useState(false);
    const closeMobileMunu = () =>{
        setClick(false);
    }
    return (
        <div className="navbar">
            <div className={click?"navbar__link open":"navbar__link"}>
                <div>
                    <Link to="/shop" className="navbar__item" onClick={closeMobileMunu}>Shop</Link>
                    <Link to="/about" className="navbar__item" onClick={closeMobileMunu}>About</Link>
                    <Link to ="/contact" className="navbar__item" onClick={closeMobileMunu}>Contact</Link>
                </div>
            </div>
            <div className="navbar__logo">
                <Link to="/"><img src={logo} alt="logo" className="navbar__logo-image" onClick={closeMobileMunu}/></Link>
            </div>
            <div className="navbar__shopping">
                <Link to ="/admin" className="navbar__item">Admin</Link>
                <div className="navbar__shopping-cart">
                    <Link to="/checkout"><IconButton>
                        <AddShoppingCartIcon />
                    </IconButton>
                    {props.cart.length!==0&& <span className="cart-icon">{props.cart.length}</span>}
                    </Link>
                </div>
                <div onClick={()=>setClick(!click)} className="hambuger">{click?<CloseIcon />:<MenuIcon />}</div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {cart:state.carts}
}
export default connect(mapStateToProps)(Navbar)
