import React, { useState } from 'react';
import { connect } from "react-redux";
import { CountryDropdown } from 'react-country-region-selector';
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Button } from './Button';
import formatCurrency from "../util";
import "./Checkout.css";
import CartItem from './CartItem';


const Checkout = (props) => {

    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [address, setAddress] = useState("");
    const [town, setTown] = useState("");
    const [postcode, setPostcode] = useState("")
    const [country, setCountry] = useState("")


    return (
        <div className="checkout">
            <Zoom>
                <div className="checkout__information">
                    <form action="" className="checkout__form">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" required id="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        <div className="name-flex">
                            <div>
                                <label htmlFor="firstname">First name</label>
                                <input type="text" required id ="firstname" onChange={(e)=>setFirstname(e.target.value)} value={firstname}/>
                            </div>
                            <div>
                                <label htmlFor="lastname">Last name</label>
                                <input type="text" required id ="lastname" onChange={(e)=>setLastname(e.target.value)} value={lastname}/>
                            </div>
                        </div>
                        <label htmlFor="address">Address</label>
                        <input type="text" required id="address" onChange={(e)=>setAddress(e.target.value)} value={address}/>
                        <div className="name-flex">
                            <div>
                                <label htmlFor="city">Town/city</label>
                                <input type="text" required id="city"onChange={(e)=>setTown(e.target.value)} value={town}/>
                            </div>
                            <div>
                                <label htmlFor="postcode">PostCode</label>
                                <input type="text" required id="postcode" onChange={(e)=>setPostcode(e.target.value)} value={postcode}/>
                            </div>
                        </div>
                        <label htmlFor="country">Country</label>
                        <CountryDropdown className="form_country" onChange={(e)=>setCountry(e)} value={country}/>
                        <div className="checkout__button"><Button buttonStyle="cart" buttonColor="gray">Submit</Button></div>
                    </form>
                </div>
            </Zoom>
            <div className="checkout__cart">
                <p>What's in your bag</p>
                {props.carts.length !==0 && props.carts.map((product)=>{
                    return <Fade right key={product.id}><CartItem  data={product.data} count={product.count} product={product}/></Fade>
                })}
                {props.carts.length !==0 && 
                    <div className="checkout-total">
                        <p> Total: {formatCurrency(props.carts.reduce((a,c)=>a + c.data.productPrice*c.count,0))}</p>
                    </div>
                }
            </div>
        </div>
    )
}
const mapStateToProps =(state) => {
    return{carts: state.carts}
}
export default connect(mapStateToProps)(Checkout)
