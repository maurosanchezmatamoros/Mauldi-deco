import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({ id, productName, bigPictureUrl, price, stock, description }) => {

    const [quantity, setQuantity] = useState()

    const handleAddToCart = (count) => {
        console.log(`Se agregaron ${count} unidades al carrito`)
        setQuantity(count)
    }

    return (
        <div className="itemDetail">
            <img className="itemDetail__img" src={bigPictureUrl} alt={productName}></img>
            <div className="itemDetail__text">
                <p className="itemDetail__text__name">{productName}</p>
                <p className="itemDetail__text__id">(Cód. {id})</p>
                <p className="itemDetail__text__price">$ {price}</p>
                <p className="itemDetail__text__description">{description}</p>
                {quantity > 0 ? <Link to='/cart'><button className="itemDetail__text__cart">Ir al carrito</button></Link> : <ItemCount stock={stock} addToCart={handleAddToCart}/>}
            </div>
        </div>
    )

}

export default ItemDetail