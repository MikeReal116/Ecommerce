import React, { useState } from 'react';
import { connect } from "react-redux";
import { CountryDropdown } from 'react-country-region-selector';
import { Redirect } from 'react-router';
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import firebase from "firebase/app";
import Zoom from "react-reveal/Zoom";
import { Button } from './Button';
import formatCurrency from "../util";
import "./Checkout.css";
import CartItem from './CartItem';
import { createOrder, clearCart } from "../actions";



const Checkout = (props) => {
    const [modal, setModal] = useState(false);

    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [address, setAddress] = useState("");
    const [town, setTown] = useState("");
    const [postcode, setPostcode] = useState("");
    const [country, setCountry] = useState("");


    const handleSubmit = (e) =>{
        e.preventDefault();
        const order = {
            email,
            firstname,
            lastname,
            address,
            town,
            postcode, 
            country,
            cartItem:props.carts,
            total: formatCurrency(props.carts.reduce((a,c)=>a + c.data.productPrice*c.count,0)),
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }
        props.createOrder(order);
        openModal();
    }
    const openModal = () => {
        setModal(true);
    }
    const closeModal = () => {
        setModal(false)
    }

    return (
        <div className="checkout">
            <Zoom>
                <div className="checkout__information">
                    <form action="" className="checkout__form" onSubmit={handleSubmit}>
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
            {
                modal &&
                <Modal isOpen={true} onRequestClose={closeModal} ariaHideApp={false}>
                <button onClick={()=> {props.clearCart() ; closeModal()}} className="modal__close"> x </button>
                    <div className="modal">
                        {
                            <ul className="modal__list">
                                    <li className="header">
                                        <div>Thank You For Your Order</div>
                                            <div className="active">  </div>
                                    </li>
                                    <li>
                                        <div>Order Detail:</div>
                                        <div >{props.order.cartItem.map(x=>{
                                            return <div key={x.id}className="active">{x.count} {"X"} {x.data.productName} </div>
                                        })}</div>
                                    </li>
                                    <li>
                                        <div >Total:</div>
                                        <div className="active">{props.order.total}</div>
                                    </li>
                                    <li>
                                        <div >Email</div>
                                        <div className="active">{props.order.email}</div>
                                    </li>
                                    <li>
                                        <div >Name:</div>
                                        <div className="active">{props.order.firstname} {"  "} {props.order.lastname}</div>
                                    </li>
                                    <li>
                                        <div>Address:</div>
                                        <div className="active">{props.order.address} {" "} {props.order.postcode}</div>
                                    </li>
                                    <li>
                                        <div>Town:</div>
                                        <div className="active">{props.order.town}</div>
                                    </li>
                                    <li>
                                        <div>Country:</div>
                                        <div className="active" >{props.order.country}</div>
                                    </li>
                            </ul>
                        }
                    </div>
                </Modal> 
            }
            {props.carts.length!==0?null: <Redirect to ="/shop" />}
        </div>
    )
}
const mapStateToProps =(state) => {
    return{carts: state.carts, order:state.orders.order}
}
export default connect(mapStateToProps, { createOrder, clearCart })(Checkout)
