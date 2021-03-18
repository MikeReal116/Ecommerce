import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar";
import './App.css';
import HeroSection from "./HeroSection";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import Checkout from "./Checkout";


function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path="/" exact component={HeroSection}/>
          <Route path ="/shop/addproduct" exact component= {AddProduct}/>
          <Route path="/shop" exact component={ProductList} />
          <Route path="/checkout" exact component ={Checkout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
