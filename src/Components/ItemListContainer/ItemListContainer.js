import { useState, useEffect } from 'react'
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import Loader from "../Loader/Loader"
import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'


const ItemListContainer = () => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryOrder } = useParams()

    useEffect(() => {
        const collectionRef = categoryOrder?
        query(collection(firestoreDb, 'products'), where('category', '==', categoryOrder))
        : collection(firestoreDb, 'products')

        getDocs(collectionRef)
        .then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        })
        .finally(() => setLoading(false))
    }, [categoryOrder])

    return(
        <div className="ItemListContainer" style={{backgroundImage: 'url("../../images/fondoPalmeras.png")'}}>
            { loading? <Loader></Loader> : <ItemList products={products}/> }
        </div>
    )
}

export default ItemListContainer