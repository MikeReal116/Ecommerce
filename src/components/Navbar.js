import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import logo from "../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__link">
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <div className="navbar__logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="navbar__shopping">
                <a href="">Trade</a>
                <AddShoppingCartIcon />
            </div>
        </div>
    )
}

export default Navbar
