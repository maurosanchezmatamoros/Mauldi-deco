import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({ id, productName, pictureUrl, price }) => {

    return (
        <div className="item">
            <p className="item__name">{productName}</p>
            <Link to={`/detail/${id}`}><img src={pictureUrl} alt={productName}></img></Link>
            <p className="item__price">$ {price}</p>
        </div>
    )
}

export default Item