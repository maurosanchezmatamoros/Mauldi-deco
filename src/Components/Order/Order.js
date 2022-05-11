import { useState, useContext } from "react"
import CartContext from "../../Context/CartContext"
import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase/index"
import { LoaderWidget } from "../Loader/Loader"
import "./Order.css"
import swal from "sweetalert"
import { Formik, Form, Field, ErrorMessage } from "formik"

const Order = () => {

    const { cart, getTotal, clearCart } = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [disabledSubmit, setDisabledSubmit] = useState(false)
    const [orderSubmit, setOrderSubmit] = useState("orderSubmit")

    const createOrder = (valores) => {
        const order = {
            buyer: {...valores},
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
            else {swal("Lo siento!", `No hay stock disponible`, "error")
            return Promise.reject({error: 'OutOfStockError', prods: outOfStock})
            }
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

    return(
        <div className="Order" style={{backgroundImage: 'url("../../images/fondoPalmeras.png")'}}>
            <h1 className="Order__title">Orden de compra</h1>
            <Formik
                initialValues = {{
                    name: "",
                    lastName: "",
                    cel: "",
                    email: ""
                }}

                validate = {($values) => {

                    let errores = {}

                    if (!$values.name){
                        errores.name = 'Por favor ingresa un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test($values.name)){
                        errores.name = 'El nombre solo puede contener letras y/o espacios'
                    }

                    if (!$values.lastName){
                        errores.lastName = 'Por favor ingresa un apellido'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test($values.lastName)){
                        errores.lastName = 'El apellido solo puede contener letras y/o espacios'
                    }

                    if (!$values.cel){
                        errores.cel = 'Por favor ingresa un número de contacto'
                    }

                    if (!$values.email){
                        errores.email = 'Por favor ingresa un email'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test($values.email)){
                        errores.email = 'El formato no corresponde a un email'
                    }

                    return errores
                }}

                onSubmit = {(valores, {resetForm}) => {
                    createOrder(valores)
                    setLoading(true)
                    setDisabledSubmit(true)
                    setOrderSubmit("")
                    resetForm()
                }}>

                {( { errors } ) => (
                    <Form className="Order__form">
                    <div className="Order__input">
                        <label htmlFor="name">Nombre:</label>
                        <Field 
                            type="text" 
                            name="name" 
                            id="name" 
                        />
                    </div>
                        <ErrorMessage name="name" component={() => (
                            <div className="Order__input__error">{errors.name}</div>
                        )} />
                    <div className="Order__input">
                        <label htmlFor="lastname">Apellido:</label>
                        <Field 
                            type="text" 
                            name="lastName" 
                            id="lastName" 
                        />
                    </div>
                        <ErrorMessage name="lastName" component={() => (
                            <div className="Order__input__error">{errors.lastName}</div>
                        )} />
                    <div className="Order__input">
                        <label htmlFor="cel">Cel:</label>
                        <Field 
                            type="number" 
                            name="cel" 
                            id="cel" 
                        />
                    </div>
                        <ErrorMessage name="cel" component={() => (
                            <div className="Order__input__error">{errors.cel}</div>
                        )} />
                    <div className="Order__input">
                        <label htmlFor="email">Email:</label>
                        <Field 
                            type="email" 
                            name="email" 
                            id="email" 
                        />
                    </div>
                        <ErrorMessage name="email" component={() => (
                            <div className="Order__input__error">{errors.email}</div>
                        )} />
                    {loading?
                    <div className="Order__loader"><LoaderWidget></LoaderWidget></div>
                    :
                    <div className="Order__submit">
                        <input 
                            type="submit" 
                            value="Enviar orden de compra" 
                            id={orderSubmit} 
                            disabled={disabledSubmit}
                        />
                    </div>
                    }
                </Form>
                )}
            </Formik>
        </div>
    )
}

export default Order