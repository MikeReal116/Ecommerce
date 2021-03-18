import React, { useEffect } from 'react'
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
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
                                return   <Product key={product.id} data={product.data} product={product} />
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
                        return <CartItem key={product.id} data={product.data} count={product.count} product={product}/>
                    })}
                </div>
                }{props.carts.length !==0 && 
                <div className="productlist__cart-total">
                    <p> Total: {formatCurrency(props.carts.reduce((a,c)=>a + c.data.productPrice*c.count,0))}</p>
                    <Button buttonColor="gray" buttonStyle="cart">Buy now</Button>
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

