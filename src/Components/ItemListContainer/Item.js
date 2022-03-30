import ItemCount from "../ItemCount/ItemCount"
import "./Item.css"

const handleAddToCart = (quantity) => {
    alert(`Se agregaron ${quantity} unidades al carrito`)
    }

const Item = ({ id, name, picture, price, stock }) => {

    return (
        <div className="item">
            <p className="item__name">{name}</p>
            <p className="item__id">(Cód. {id})</p>
            <img src={picture} alt={name}></img>
            <p className="item__price">$ {price}</p>
            <ItemCount stock={stock} addToCart={handleAddToCart}/>
        </div>
    )
}

export default Item