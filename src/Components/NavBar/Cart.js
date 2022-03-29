import './Cart.css'

const Cart = (props) => {
    return (
        <div className='cart'>
            <img src={props.cartImg} className="cart__img" alt="carrito de compras" />
            <p>{props.itemsCart}</p>
        </div>
    )
}

export default Cart