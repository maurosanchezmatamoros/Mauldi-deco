import "./App.css"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./Components/Cart/Cart"
import NavBar from './Components/NavBar/NavBar'
import Order from './Components/Order/Order'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartContextProvider } from "./Context/CartContext"

const App = () => {

  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/cart/order' element={<Order />} />
            <Route path='*' element={<h1>Page not found</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App;
