import "./ItemDetailContainer.css"
import { getProductsById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Loader from "../Loader/Loader"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        console.log(loading)
        getProductsById(productId)
        .then(item => {setProduct(item)})
        .catch(err => {console.log(err)})
        .finally(() => setLoading(false))
        
        return (() => {
            setProduct()
        })

    },[productId])

    return (
        <div className="ItemDetailContainer" >
            { loading? <Loader></Loader> : product? <ItemDetail  {...product} /> : <h1>El producto no existe</h1> }
        </div>
    )
}

export default ItemDetailContainer
