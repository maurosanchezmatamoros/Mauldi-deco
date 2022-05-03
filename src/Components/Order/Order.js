import { useState, useContext } from "react"
import CartContext from "../../Context/CartContext"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase/index"
import { LoaderWidget } from "../Loader/Loader"
import "./Order.css"

const Order = () => {

    const { cart, getTotal } = useContext(CartContext)
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

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocToCollection()
        setLoading(true)
        setDisabledSubmit(true)
        setOrderSubmit("")
    }

    const addDocToCollection = () => {
        const order = {
            buyer: buyer,
            items: cart,
            date: Timestamp.fromDate(new Date()),
            total: getTotal()
        }
        console.log(order)

        const collectionRef = collection(firestoreDb, "orders")

        addDoc(collectionRef, order)
            .then(response => {console.log(response.id)})
            .catch(err => {console.log(err)})
            .finally(() => setLoading(false))
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