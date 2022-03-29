import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    return (
        <div>
            <p className="catalogo">{props.greeting}</p>
        </div>
    )
}

export default ItemListContainer