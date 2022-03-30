import React, { useState, useEffect } from 'react';
import Item from "./Item"
import "./ItemList.css"

const ItemList = () => {

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        setTimeout(() => {
            fetch("./Products.json")
            .then(res => res.json())
            .then((json) => {
                let productos = json
                setProducts((products) => (products = productos))
            })
        }, 2000)
    }, [])

    return(
        <div className='ItemList'>
            {products.map((el) => (
            <Item key={el.id} stock={el.stock} name={el.productName} picture={el.pictureUrl} id={el.id} price={el.price}/>
            ))}
        </div>
    )
}

export default ItemList