import React, { useState } from 'react'
import { Button } from "./Button";
import { storage } from "../firebase";
import db from "../firebase";
import "./AddProduct.css";
import { Link } from 'react-router-dom';
import history from "../history";

const AddProduct = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productDescription, setProductDescription] = useState("");
    const [productImage, setProductImage] = useState("");
    const [error, setError] = useState("");

    const type = ["image/png", "image/jpg"];
    const handleImage = (e) => {
        let selectedFile = e.target.files[0] 
        if(selectedFile && type.includes(selectedFile.type)){
            setProductImage(selectedFile);
            setError("")
        }
        else{
            setError("Please choose a valid image of type jpg or png");
            alert(error)
        }
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`product-images/${productImage.name}`).put(productImage);
        uploadTask.on("state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
                console.log(progress);
            },(error) => {
                alert(error.message);
            },
            () => {
                storage.ref("product-images").child(productImage.name).getDownloadURL().then((downloadURL)=>{
                    db.collection("products").add({
                        productName,
                        productPrice,
                        productDescription,
                        productImage:downloadURL
                    }).then(()=>{
                        setProductName("");
                        setProductPrice(0);
                        setProductDescription("");
                        document.getElementById("file").value ="";
                    })
                });
            }
        );
        history.push("/shop");
    }

    return (
        <div className="addproduct">
            <h2>Add Products</h2>
            <form className="addproduct__form" onSubmit={handleSumbit}>
                <label htmlFor="product-name">Product Name</label>
                <input type="text" required  onChange={e => setProductName(e.target.value)} value={productName}/>
                <label htmlFor="product-price">Product Price</label>
                <input type="number" required onChange={e => setProductPrice(e.target.value)} value={productPrice} />
                <label htmlFor="product-description">Product Description</label>
                <input type="text" required onChange={e => setProductDescription(e.target.value)} value={productDescription}/>
                <label htmlFor="product-image">Product Image</label>
                <input type="file" onChange={handleImage} id="file"/>
                <Link to="/shop/addproduct"><Button buttonStyle="primary" buttonColor="green-2">Add Product</Button></Link>
            </form>
        </div>
    )
}

export default AddProduct
