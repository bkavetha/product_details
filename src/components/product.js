import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './product.css';

const ProductList = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
        .then(resp => resp.json())
        .then(data => setProduct(data))
    }, [])

    return(
        <>
            <div>
            <h1 style={{textDecoration:"underline"}}>ProductList</h1>
            {product.map((item) => (
                <>
                  <p>Product ID: {item.id}</p><h2>{item.name}</h2>
                  <h4 style={{display:"inline-block"}}>Rs. {item.price}</h4>
                  <span style={{marginLeft: '140px'}} className={item.in_stock ? "available" : "unavailable"}>{item.in_stock ? "Available" : "Unavailable"}</span>
                  <hr></hr>
                </>
            ))}
        </div>
        </>
      
    )
}

export default ProductList;

