import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import "./Cart.css"

const Cart = () => {

    const { cart, clearCart } = useContext(CartContext)

    let total = 0
    cart.forEach(prod => total += prod.price * prod.quantity)

    if(cart.length == 0) {
        return(
            <div className="Cart">
                <h1 className="Cart__noProducts">No hay productos en el carrito</h1>
            </div>
        )
    }

    return (
        <div className="Cart">
            <h1 className="Cart__title">Carrito de compras</h1>
            <button className="Cart__clear" onClick={clearCart}>Vaciar Carrito</button>
            <div className="Cart__prods"> { cart.map(prod => <ItemCart key={prod.id} prod={prod}></ItemCart>) } </div>
            <p className="Cart__total">Total: $ {total}</p>
        </div>
    )
}

export default Cart