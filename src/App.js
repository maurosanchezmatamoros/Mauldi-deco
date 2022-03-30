import "./App.css"
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import NavBar from './Components/NavBar/NavBar.js';


const App = () => {

  const handleAddToCart = (quantity) => {
    alert(`Se agregaron ${quantity} unidades al carrito`)
  }

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div>
        <ItemListContainer greeting="Acá se mostrará mi catálogo"/>
      </div>
      <div>
        <ItemCount product="Alfombras" stockInicial={10} addToCart={handleAddToCart}/>
      </div>
    </div>
  )
}

export default App;
