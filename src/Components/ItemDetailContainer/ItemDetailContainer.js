import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Loader from "../Loader/Loader"
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = ({ cart, setCart }) => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getDoc(doc(firestoreDb, 'products', productId))
        .then(response => {
            const product = {id: response.id, ...response.data()}
            setProduct(product)})
        .catch(err => {console.log(err)})
        .finally(() => setLoading(false))
        
        return (() => {
            setProduct()
        })

    },[productId])

    if(loading) {
        return(
            <Loader></Loader> 
        )
    }

    return (
        <div className="ItemDetailContainer" style={{backgroundImage: 'url("../../images/fondoPalmeras.png")'}}>
            { product? <ItemDetail  {...product} setCart={setCart} cart={cart} /> : <h1>El producto no existe</h1> }
        </div>
    )
}

export default ItemDetailContainer
