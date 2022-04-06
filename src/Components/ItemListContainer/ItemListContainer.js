import React, { useState, useEffect } from 'react';
import "./ItemListContainer.css"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        setTimeout(() => {
            fetch("./Products.json")
                .then(res => res.ok? res.json() : Promise.reject(res))
                .then(json => setProducts(json))
                .catch(err => console.log(`error : ${err}`))
                .finally(() => console.log("mensaje final"))
        }, 2000);    
    }, [])

    return(
        <div className="ItemListContainer">
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer