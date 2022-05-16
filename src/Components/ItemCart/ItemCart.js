import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import "./ItemCart.css"

const ItemCart = ({ prod }) => {

    const { removeItem, addQuantity, subtractQuantity } = useContext(CartContext)

    const add = (el) => {
        if(prod.quantity < prod.stock){
            addQuantity(el)
        }
    }

    const subtract = (el) => {
        if(prod.quantity > 1){
            subtractQuantity(el)
        }
    }

    return(
            <div className="ItemCart shadow">
                <div className="ItemCart__content">
                    <div className="ItemCart__imgContainer">
                        <button onClick={() => subtract(prod.id)}>➖</button>
                        <img className="ItemCart__img" src={prod.pictureUrl} alt={prod.productName}></img>
                        <button onClick={() => add(prod.id)}>➕</button>
                    </div>
                    <div className="ItemCart__main">
                        <h2 className="ItemCart__main__title">{prod.productName}</h2>
                        <p className="ItemCart__main__description">{prod.description}</p>
                    </div>
                    <div className="ItemCart__price">
                        <p className="ItemCart__price__unit">{prod.quantity} u. X $ {prod.price}</p>
                        <p className="ItemCart__price__total">$ {prod.price * prod.quantity}</p>
                    </div>
                </div>
                <button className="ItemCart__close" onClick={() => removeItem(prod.id)}>X</button>
            </div>
    )
}

export default ItemCart