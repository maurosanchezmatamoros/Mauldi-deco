import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../Context/CartContext"

const ItemDetail = ({ id, productName, bigPictureUrl, price, stock, description, pictureUrl }) => {

    const { addItem, isInCart } = useContext(CartContext)
    
    const handleAddToCart = (count) => {
        
        const productObj = {
            id, productName, price, description, pictureUrl, stock, quantity: count
        }

        addItem(productObj)
    }
    

    return (
        <div className="itemDetail">
            <img className="itemDetail__img" src={bigPictureUrl} alt={productName}></img>
            <div className="itemDetail__text">
                <p className="itemDetail__text__name">{productName}</p>
                <p className="itemDetail__text__id">(Cód. {id})</p>
                <p className="itemDetail__text__price">$ {price}</p>
                <p className="itemDetail__text__description">{description}</p>
                {isInCart(id) ? <Link to='/cart'><button className="itemDetail__text__cart">Ir al carrito</button></Link> : <ItemCount stock={stock} addToCart={handleAddToCart}/>}
            </div>
        </div>
    )

}

export default ItemDetail