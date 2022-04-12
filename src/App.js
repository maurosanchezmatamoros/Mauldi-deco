import "./App.css"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
