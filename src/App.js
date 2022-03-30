import "./App.css"
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';


const App = () => {

  

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div>
        <ItemListContainer />
      </div>
    </div>
  )
}

export default App;
