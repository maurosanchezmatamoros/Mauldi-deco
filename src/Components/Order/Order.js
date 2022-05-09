import { useState, useContext } from "react"
import CartContext from "../../Context/CartContext"
import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase/index"
import { LoaderWidget } from "../Loader/Loader"
import "./Order.css"
import swal from "sweetalert"

const Order = () => {

    const { cart, getTotal, clearCart } = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [disabledSubmit, setDisabledSubmit] = useState(false)
    const [orderSubmit, setOrderSubmit] = useState("orderSubmit")
    const [buyer, setBuyer] = useState({
        name: "",
        lastName: "",
        cel: "",
        email: ""
    })

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name] : e.target.value
        })
    }

    const createOrder = () => {
        const order = {
            buyer: buyer,
            items: cart,
            date: Timestamp.fromDate(new Date()),
            total: getTotal()
        }

        const batch = writeBatch(firestoreDb)

        const productsIds = order.items.map(prod => prod.id)

        const collectionRef = collection(firestoreDb, "products")

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', productsIds)))
        .then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const orderQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                dataDoc.stock >= orderQuantity ?
                batch.update(doc.ref, { stock: dataDoc.stock - orderQuantity }) :
                outOfStock.push( {id: doc.id, productName: dataDoc.productName} )
            })
        }).then(() => {
            if (outOfStock.length === 0){
                const collectionRef = collection(firestoreDb, 'orders')
                return addDoc(collectionRef, order)}
            else {return Promise.reject({error: 'OutOfStockError', prods: outOfStock}),
                swal("Lo siento!", `No hay stock disponible`, "error")}
            }).then(({id}) => {
                batch.commit()
                swal("Felicitaciones!", `Se agregó la orden de compra con el ID: ${id}`, "success")
                console.log(`Se agregó la orden de compra con el ID: ${id}`)
                clearCart()
            }).catch(err => {
                console.log(err)
                swal("Lo siento!", `No se ha podido generar la orden de compra`, "error")
            }).finally(() => setLoading(false))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createOrder()
        setLoading(true)
        setDisabledSubmit(true)
        setOrderSubmit("")
    }

    return(
        <div className="Order" style={{backgroundImage: 'url("../../images/fondoPalmeras.png")'}}>
            <h1 className="Order__title">Orden de compra</h1>
            <form className="Order__form" onSubmit={handleSubmit}>
                <div className="Order__input">Nombre:<input type="text" name="name" onChange={handleInputChange}/></div>
                <div className="Order__input">Apellido:<input type="text" name="lastName" onChange={handleInputChange}/></div>
                <div className="Order__input">Cel:<input type="text" name="cel" onChange={handleInputChange}/></div>
                <div className="Order__input">Email:<input type="text" name="email" onChange={handleInputChange}/></div>
                {loading?
                <div className="Order__loader"><LoaderWidget></LoaderWidget></div>
                : <div className="Order__submit"><input type="submit" value="Enviar orden de compra" id={orderSubmit} disabled={disabledSubmit}/></div>}
            </form>
        </div>
    )
}

export default Order