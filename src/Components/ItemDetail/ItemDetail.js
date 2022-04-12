import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const handleAddToCart = (quantity) => {
    alert(`Se agregaron ${quantity} unidades al carrito`)
    }

const ItemDetail = ({ id, productName, pictureUrl, price, stock }) => {

    return (
        <div className="item">
            <p className="item__name">{productName}</p>
            <p className="item__id">(Cód. {id})</p>
            <img src={pictureUrl} alt={productName}></img>
            <p className="item__price">$ {price}</p>
            <ItemCount stock={stock} addToCart={handleAddToCart}/>
        </div>
    )

}

export default ItemDetail