import React from "react"
import {Router, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar";
import './App.css';
import HeroSection from "./HeroSection";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import Checkout from "./Checkout";
import About from "./About";
import Contact from "./Contact";
import Admin from "./Admin";
import history from "../history"

function App() {
  return (
    <div className="app">
    <Router history={history}>
      <Navbar />
        <Switch>
          <Route path="/" exact component={HeroSection}/>
          <Route path ="/shop/addproduct" exact component= {AddProduct}/>
          <Route path="/shop" exact component={ProductList} />
          <Route path="/checkout" exact component ={Checkout} />
          <Route path ="/about" exact component={About}/>
          <Route  path ="/contact" component={Contact}/>
          <Route path ="/admin" exact component ={Admin}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
