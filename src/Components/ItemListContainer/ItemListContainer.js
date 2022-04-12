import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import Loader from "../Loader/Loader"

const ItemListContainer = () => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
        getProducts(categoryId)
        .then(prods => setProducts(prods))
        .catch(err => console.log(`error : ${err}`))
        .finally(() => setLoading(false))
    }, [categoryId])

    return(
        <div className="ItemListContainer">
            { loading? <Loader></Loader> : <ItemList products={products}/> }
        </div>
    )
}

export default ItemListContainer