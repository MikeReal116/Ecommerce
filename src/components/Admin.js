import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchOrders } from "../actions";
import { Button } from "./Button";
import "./Admin.css";

const Admin = (props) => {
    const { orders } = props;
    useEffect(()=>{
        props.fetchOrders();
    }, [orders])
   
    return (
        <div className="admin">
           <table>
                <tbody>
                    <tr>
                        <th>Order Number</th>
                        <th>Order detail</th>
                        <th>Total</th>
                        <th>Customer Address</th>
                        <th>Customer Name</th>
                    </tr>
                    {
                        orders &&
                        orders.map(({id, data})=>{
                            return(
                                <tr key ={id}>
                                    <td>{id}</td>
                                    <td>{data.cartItem.map(item=>{return <div key={item.id}>{item.count} {"X"} {item.data.productName}</div>})}</td>
                                    <td>{data.total}</td>
                                    <td>{data.address}{" "}{data.postcode}{","}{data.town}{" "}{data.country}</td>
                                    <td>{data.firstname} {" "} {data.lastname}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
           </table>
           <Button buttonStyle="primary" buttonColor="green-2">Add Product</Button>
        </div>
    )
}

const mapStateToProps = (state) =>{
  return{orders: state.orders.orders}
}
export default connect(mapStateToProps, { fetchOrders })(Admin)
