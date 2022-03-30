import "./ItemCount.css"
import { useState } from 'react'

const ItemCount = ({product, stockInicial, addToCart}) => {
    const [count, setCount] = useState(0)

    const add = () => {
        if(count < stockInicial){
            setCount(count + 1)
        }
    }

    const subtract = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    return (
        <div className="itemCount">
            <p>{product}</p>
            <p>Stock: {stockInicial}</p>
            <div className="itemCount__div">
                <button onClick={subtract}>➖</button>
                <p>{count}</p>
                <button onClick={add}>➕</button>
            </div>
            <button onClick={() => addToCart(count)}>AGREGAR AL CARRITO</button>
        </div>
    )
}

export default ItemCount