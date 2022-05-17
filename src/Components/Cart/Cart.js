import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../Context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import "./Cart.css"

const Cart = () => {

    const { cart, clearCart, getTotal } = useContext(CartContext)

    console.log(cart)

    if(cart.length === 0) {
        return(
            <div className="Cart" style={{backgroundImage: 'url("../../images/fondoPalmeras.png")'}}>
                <h1 className="Cart__noProducts">No hay productos en el carrito</h1>
            </div>
        )
    }

    return (
        <div className="Cart" style={{backgroundImage: 'url("../../images/fondoPalmeras.png")'}}>
            <h1 className="Cart__title">Carrito de compras</h1>
            <button className="Cart__clear shadow" onClick={clearCart}>Vaciar Carrito</button>
            <div className="Cart__prods"> { cart.map(prod => <ItemCart key={prod.id} prod={prod}></ItemCart>) } </div>
            <p className="Cart__total">Total: $ {getTotal()}</p>
            <Link to="/cart/order"><button className="Cart__order shadow">Finalizar compra</button></Link>
            <Link to="/"><button className="Cart__order shadow">Seguir comprando</button></Link>
        </div>
    )
}

export default Cart