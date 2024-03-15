import React from "react";
import { useEffect, useState, useCallback } from "react";
import './product.css';
import { FetchDetails } from "../hooks/useFetch";

const ProductList = () => {
    // const [product, setProduct] = useState([]);
    const [url, setUrl] = useState("http://localhost:5000/products/")
    const {data : products, loading, error} = FetchDetails(url); 
    
    // const [counter, setCounter] = useState(0);

    // (1) to fetch data and display in a console

    // useEffect(() => {   
    //     fetch(url)
    //     .then(resp => resp.json())
    //     .then(data => setProduct(data))
    // }, [url]);

    // useEffect(() => {
    //     console.log(counter);
    // }, [counter]);

    // (2) to fetch data using json server

    // useEffect(() => { 
    //     const fetchProducts = async () => {
    //         const resp = await fetch(url);
    //         const data = await resp.json();
    //         setProduct(data);
    //     }
    //     fetchProducts();
    // }, [url])

    // ( 3) fetch data using callback function

    // const fetchProducts = useCallback(async () => {
    //     const resp = await fetch(url);
    //     const data = await resp.json();
    //     setProduct(data)
    // }, [url])

    // useEffect(() => {
    //     fetchProducts();
    // }, [fetchProducts]);

    return(
        <> 
        {/* <button className="all_btn" style={{marginRight: '50px'}} onClick={() => setCounter(counter + 1)}>{counter}</button> */}
        <button className="all_btn" onClick={() => setUrl("http://localhost:5000/products")}>All</button>
        <button className="in_stock_btn" onClick={() => setUrl("http://localhost:5000/products?in_stock=true")}>In Stock Product List</button>
            <div>
            <h1 style={{textDecoration:"underline"}}>ProductList</h1>

            { loading && <p>Loading Product List.....</p>}

            {error && <p>{error}</p>}

            {products && products.map((item) => (
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

