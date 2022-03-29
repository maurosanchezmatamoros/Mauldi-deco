import "./App.css"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import NavBar from './Components/NavBar/NavBar.js';


const App = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div>
        <ItemListContainer greeting="Acá se mostrará mi catálogo"/>
      </div>
    </div>
  )
}

export default App;
