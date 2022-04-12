import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const handleAddToCart = (quantity) => {
    alert(`Se agregaron ${quantity} unidades al carrito`)
    }

const ItemDetail = ({ id, productName, bigPictureUrl, price, stock, description }) => {

    return (
        <div className="itemDetail">
            <img className="itemDetail__img" src={bigPictureUrl} alt={productName}></img>
            <div className="itemDetail__text">
                <p className="itemDetail__text__name">{productName}</p>
                <p className="itemDetail__text__id">(Cód. {id})</p>
                <p className="itemDetail__text__price">$ {price}</p>
                <p className="itemDetail__text__description">{description}</p>
                <ItemCount stock={stock} addToCart={handleAddToCart}/>
            </div>
        </div>
    )

}

export default ItemDetail