import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../Context/CartContext"
import swal from "sweetalert"

const ItemDetail = ({ id, productName, bigPictureUrl, price, stock, description, pictureUrl }) => {

    const { addItem, isInCart } = useContext(CartContext)
    
    const handleAddToCart = (count) => {
        
        const productObj = {
            id, productName, price, description, pictureUrl, stock, quantity: count
        }

        if(count !== 0){addItem(productObj)}
        else{swal("Seleccione cantidad de unidades a agregar al carrito")}
    }
    

    return (
        <div className="itemDetail">
            <div className="itemDetail__img"><img src={bigPictureUrl} alt={productName}></img></div>
            <div className="itemDetail__text">
                <p className="itemDetail__text__name">{productName}</p>
                <p className="itemDetail__text__id">(Cód. {id})</p>
                <img className="itemDetail__text__img" src={pictureUrl} alt={productName}></img>
                <p className="itemDetail__text__price">$ {price}</p>
                <p className="itemDetail__text__description">{description}</p>
                {isInCart(id) ?
                <div className="itemDetail__text__cartButtons">
                    <Link to='/cart'><button className="itemDetail__text__cart">Ir al carrito</button></Link>
                    <Link to='/'><button className="itemDetail__text__cart">Seguir comprando</button></Link>
                </div>
                :
                <ItemCount stock={stock} addToCart={handleAddToCart}/>}
            </div>
        </div>
    )

}

export default ItemDetail