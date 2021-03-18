import React, { useEffect } from 'react'
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import { Link } from 'react-router-dom';
import { fetchProducts } from "../actions";
import Product from "./Product";
import "./ProductList.css";
import CartItem from "./CartItem"
import { Button } from "./Button"
import formatCurrency from "../util";


const ProductList = (props) => {

    useEffect(()=>{
        props.fetchProducts();
    }, []);


    return (
        <div className="productlist">
                <Fade bottom>
                    <div className="productlist__product">
                        {  props.products&&
                            props.products.map((product)=>{
                                return   <div key={product.id}><Product  data={product.data} product={product} /></div>
                            })
                        }
                    </div>
                </Fade>
            <div className="productlist__cart">
                {props.carts.length===0 ? 
                    <div>You have no item in your cart</div> : 
                <div>
                    <p>{`You have ${props.carts.length} in the cart`}</p>
                    {props.carts.map((product)=>{
                        return <Fade left key={product.id}><CartItem  data={product.data} count={product.count} product={product}/></Fade>
                    })}
                </div>
                }{props.carts.length !==0 && 
                <div className="productlist__cart-total">
                    <p> Total: {formatCurrency(props.carts.reduce((a,c)=>a + c.data.productPrice*c.count,0))}</p>
                    <Link to="/checkout"><Button buttonColor="gray" buttonStyle="cart">Buy now</Button></Link>
                </div>
                }
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {products: state.products, carts: state.carts}
}
export default connect(mapStateToProps, { fetchProducts })(ProductList)

