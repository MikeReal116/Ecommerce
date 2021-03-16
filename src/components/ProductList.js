import React, { useEffect } from 'react'
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import { fetchProducts } from "../actions";
import Product from "./Product";
import "./ProductList.css";

const ProductList = (props) => {
  

    useEffect(()=>{
        props.fetchProducts();
    }, []);

  

    return (
        <div className="productlist">
            
                <div className="productlist__product">
                    {  props.products&&
                        props.products.map((product)=>{
                            return   <Fade left><Product key={product.id} data={product.data} /></Fade>
                        })
                    }
                </div>
            
            <div className="productlist__cart">
                This it the cart elemnetn
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {products: state.products}
}
export default connect(mapStateToProps, { fetchProducts })(ProductList)

