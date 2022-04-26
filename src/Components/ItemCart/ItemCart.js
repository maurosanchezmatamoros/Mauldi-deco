import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import "./ItemCart.css"

const ItemCart = ({ prod, handleRemoveItem }) => {

    const { removeItem } = useContext(CartContext)

    return(
            <div className="ItemCart">
                <div className="ItemCart">
                    <img className="ItemCart__img" src={prod.pictureUrl} alt={prod.productName}></img>
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