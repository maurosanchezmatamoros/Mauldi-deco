import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import './CartWidget.css'



const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return (
        <div className='cart'>
            <img src="../images/cart.svg" className="cart__img" alt="carrito de compras" />
            <p>{ getQuantity() }</p>
        </div>
    )
}

export default CartWidget