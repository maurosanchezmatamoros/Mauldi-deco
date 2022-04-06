import Item from "./Item"
import "./ItemList.css"

const ItemList = ({products}) => {

    return(
        <div className='ItemList'>
            {products.map((el) => (
            <Item key={el.id} {...el}/>
            ))}
        </div>
    )
}

export default ItemList